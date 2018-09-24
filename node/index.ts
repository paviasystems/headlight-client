/**
* The Headlight API client for NodeJS
*
* @license Pavia Systems, All Rights Reserved
*
* @author Jason Hillier <jason.hillier@paviasystems.com>
*/

import * as API from './api';
export { API };

const HEADLIGHT_API_VERSION = '1.0';

export interface GeneralAPI
{
    setDefaultAuthentication(pAuth: API.Authentication): void;
}

export class CookieAuth implements API.Authentication {
    private _Username: string;
    private _Password: string;

    constructor(private sessionId: string, private client: Client){
    }

    setCredentials(pSessionId: string, pUsername: string, pPassword: string)
    {
        this.sessionId = pSessionId;
        this._Username = pUsername;
        this._Password = pPassword;
    }

    applyToRequest(requestOptions: any): void {
        if (this.sessionId) {
            requestOptions.headers['Cookie'] = 'UserSession=' + this.sessionId;
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

        this._Auth = new API.AuthenticateApi(pBaseURL);
        this._Cookie = new CookieAuth(null, this);
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
}
