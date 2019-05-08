/**
* The Headlight API client for NodeJS
*
* @license Pavia Systems, All Rights Reserved
*
* @author Jason Hillier <jason.hillier@paviasystems.com>
*/

const util = require('util');
import * as API from './api';
import * as Request from 'request';
import {BaseRepository,SimpleQuery} from 'ts-repository-fluent';
export { API };

export type constructor<T> = new()=>T;

const HEADLIGHT_API_VERSION = '1.0';

export interface GeneralAPI
{
    setDefaultAuthentication(pAuth: API.Authentication): void;
}

export interface IQueryable<T> extends GeneralAPI
{
    postReadQuery(body: any): Promise<Array<T>>;
    postReadsLiteQuery(body: any): Promise<Array<T>>;
    postReadCountQuery(body: any): Promise<any>;
}

export class Repository<T> extends BaseRepository<T>
{
    constructor(private _apiClass: IQueryable<T>, ormType: constructor<T>)
    {
        super(ormType);
        //TODO: bit of a hack to deal with Headlight Model types.
        // This is needed to properly build the primary Id field names.
        this._DataTypeName = this._DataType.name.replace('Model', '');
    }

    async reads(pQuery: SimpleQuery<T>, pRequestContext: any): Promise<Array<T>>
    {
        return await this._apiClass.postReadQuery(pQuery.packageQuery());
    }
    async readsLite(pQuery: SimpleQuery<T>, pRequestContext: any): Promise<Array<T>>
    {
        return await this._apiClass.postReadsLiteQuery(pQuery.packageQuery());
    }
    async count(pQuery: SimpleQuery<T>, pRequestContext: any): Promise<number>
    {
        let result = await this._apiClass.postReadCountQuery(pQuery.packageQuery());
        return result.Count;
    }
}

export class CookieAuth implements API.Authentication {
    private _Username: string;
    private _Password: string;
    private _Token: string;

    constructor(private sessionId: string, private client: Client){
    }

    setCredentials(pSessionId: string, pUsername: string, pPassword: string)
    {
        this.sessionId = pSessionId;
        this._Username = pUsername;
        this._Password = pPassword;
        this._Token = null;
    }

    setToken(pSessionId: string, pSessionToken: string)
    {
        this.sessionId = pSessionId;
        this._Token = pSessionToken;
        this._Username = null;
        this._Password = null;
    }

    applyToRequest(requestOptions: any): void {
        if (this.sessionId) {
            requestOptions.headers['Cookie'] = 'UserSession=' + this.sessionId;
        }
        else if (this._Token) {
            requestOptions.qs['SessionToken'] = this._Token;
        }
    }

    executeWithAuth<T>(requestOptions: any, requestDelegate: ()=>Promise<T>): Promise<T>
    {
        return requestDelegate().then((result: T)=>
        {
            return Promise.resolve(result);
        },
        (pError)=>
        {
            //TODO: should implement with statusCode
            if (this.sessionId && pError && pError.indexOf('authenticated'))
            {
                if (!this._Username || !this._Password)
                {
                    return Promise.reject('No credentials were given to authenticate with server.');
                }
                //our session has expired, login again
                return this.client.login(this._Username, this._Password)
                    .then(()=>
                    {
                        //successful login, apply the new credentials to the request
                        this.applyToRequest(requestOptions);
                        //now try the request again
                        return requestDelegate();
                    },
                    (pError)=>
                    {
                        //auth failed, so return the error
                        return Promise.reject(pError);
                    });
            }
            else
            {
                //other errors just forward
                return Promise.reject(pError);
            }
        });
    }
}

export class Client
{
    private _BaseURL: string;
    private _Cookie: CookieAuth;
    private _UserSession: API.ISession;
    private _Auth: API.AuthenticateApi;
    private _ApiReferences: {[key: string]: GeneralAPI};

    constructor(pBaseURL: string)
    {
        if (pBaseURL.endsWith('/'))
            pBaseURL = pBaseURL.substr(0, pBaseURL.length-1);
        if (pBaseURL.indexOf(HEADLIGHT_API_VERSION) < 0)
            pBaseURL = pBaseURL + '/' + HEADLIGHT_API_VERSION;
        this._BaseURL = pBaseURL;
        this._ApiReferences = {};

        this._Cookie = new CookieAuth(null, this);
        this._Auth = this.API(API.AuthenticateApi);
    }

    get UserSession(): API.ISession
    {
        return this._UserSession;
    }

    /**
     * Perform login operation, and keep session cookie for use in later API calls.
     */
    public async login(pUsername: string, pPassword: string): Promise<API.ISession>
    {
        this._UserSession = null;

        var result = await this._Auth.authenticate({UserName: pUsername, Password: pPassword});
        if (!result.UserID)
        {
            return Promise.reject('Login failure! Check username and password.');
        }
        this._UserSession = result;
        this._Cookie.setCredentials(result.SessionID, pUsername, pPassword);

        return Promise.resolve(result);
    }

    /**
     * Perform login operation, and keep session cookie for use in later API calls.
     */
    public async loginWithToken(pSessionToken: string): Promise<API.ISession>
    {
        this._UserSession = null;
        this._Cookie.setToken(null, pSessionToken);

        var result = await this._Auth.checkSession();
        if (!result.UserID)
        {
            return Promise.reject('Login failure! Check if token is still valid.');
        }
        this._UserSession = result;
        this._Cookie.setToken(result.SessionID, pSessionToken);

        return Promise.resolve(result);
    }

    /**
     * Get reference to an API, and configure it according to current state of client.
     */
    public API<T extends GeneralAPI>(pApiType: new(baseURL: string)=>T): T
    {
        let apiObject = this._ApiReferences[pApiType.name];
        if (!apiObject)
            apiObject = new pApiType(this._BaseURL);

        this._ApiReferences[pApiType.name] = apiObject;
        
        apiObject.setDefaultAuthentication(this._Cookie);

        return <T>apiObject;
    }

    /**
     * Get reference to an API, and configure it according to current state of client.
     */
    public Repository<T extends IQueryable<ORM>, ORM>(pApiType: new(baseURL: string)=>T, pORMType: constructor<ORM>): Repository<ORM>
    {
        let apiObject = this.API(pApiType);

        return new Repository(apiObject, pORMType);
    }

    private setOptions(options?: Request.CoreOptions, body?: any): Request.CoreOptions
    {
        options = options ? options : {};
        if (!options.hasOwnProperty('json')) options.json = true;
        if (!options.hasOwnProperty('headers')) options.headers = [];
        if (!options.hasOwnProperty('qs')) options.qs = [];
        if (!options.hasOwnProperty('baseUrl')) options.baseUrl = this._BaseURL;

        this._Cookie.applyToRequest(options);
        options.body = body;

        return options;
    }

    private processResponse<T>(response: any): Promise<T>
    {
        if (!response || !response.body || response.body.error || response.body.Error)
        {
            var error = "";
            if (response && response.body)
            {
                error = response.body.error || response.body.Error;
            }
            
            return Promise.reject("Response error: " + error);
        }
        else
        {
            return Promise.resolve(response.body);
        }
    }

    public async GET<T>(url: string, options?: Request.CoreOptions): Promise<T>
    {
        options = this.setOptions(options);
        var response = await util.promisify(Request.get)(url, options);
        return this.processResponse<T>(response);
    }

    public async POST<T>(url: string, body: any, options?: Request.CoreOptions): Promise<T>
    {
        options = this.setOptions(options, body);
        var response = await util.promisify(Request.post)(url, options);
        return this.processResponse<T>(response);
    }

    public async PUT<T>(url: string, body: any, options?: Request.CoreOptions): Promise<T>
    {
        options = this.setOptions(options, body);
        var response = await util.promisify(Request.put)(url, options);
        return this.processResponse<T>(response);
    }

    public async DELETE(url: string, options?: Request.CoreOptions): Promise<number>
    {
        options = this.setOptions(options);
        var response = await util.promisify(Request.delete)(url, options);
        await this.processResponse<any>(response);

        return Promise.resolve(response.body.count);
    }
}
