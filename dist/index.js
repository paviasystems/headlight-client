"use strict";
/**
* The Headlight API client for NodeJS
*
* @license Pavia Systems, All Rights Reserved
*
* @author Jason Hillier <jason.hillier@paviasystems.com>
*/
Object.defineProperty(exports, "__esModule", { value: true });
const API = require("./api");
exports.API = API;
const ts_repository_fluent_1 = require("ts-repository-fluent");
const HEADLIGHT_API_VERSION = '1.0';
class Repository extends ts_repository_fluent_1.BaseRepository {
    constructor(_apiClass, ormType) {
        super(ormType);
        this._apiClass = _apiClass;
        //TODO: bit of a hack to deal with Headlight Model types.
        // This is needed to properly build the primary Id field names.
        this._DataTypeName = this._DataType.name.replace('Model', '');
    }
    async reads(pQuery, pRequestContext) {
        return await this._apiClass.postReadQuery(pQuery.packageQuery());
    }
    async readsLite(pQuery, pRequestContext) {
        throw 'Not implemented!';
    }
    async count(pQuery, pRequestContext) {
        let result = await this._apiClass.postReadCountQuery(pQuery.packageQuery());
        return result.Count;
    }
}
exports.Repository = Repository;
class CookieAuth {
    constructor(sessionId, client) {
        this.sessionId = sessionId;
        this.client = client;
    }
    setCredentials(pSessionId, pUsername, pPassword) {
        this.sessionId = pSessionId;
        this._Username = pUsername;
        this._Password = pPassword;
        this._Token = null;
    }
    setToken(pSessionId, pSessionToken) {
        this.sessionId = pSessionId;
        this._Token = pSessionToken;
        this._Username = null;
        this._Password = null;
    }
    applyToRequest(requestOptions) {
        if (this.sessionId) {
            requestOptions.headers['Cookie'] = 'UserSession=' + this.sessionId;
        }
        else if (this._Token) {
            requestOptions.qs['SessionToken'] = this._Token;
        }
    }
    executeWithAuth(requestOptions, requestDelegate) {
        return requestDelegate().then((result) => {
            return Promise.resolve(result);
        }, (pError) => {
            //TODO: should implement with statusCode
            if (this.sessionId && pError && pError.indexOf('authenticated')) {
                if (!this._Username || !this._Password) {
                    return Promise.reject('No credentials were given to authenticate with server.');
                }
                //our session has expired, login again
                return this.client.login(this._Username, this._Password)
                    .then(() => {
                    //successful login, apply the new credentials to the request
                    this.applyToRequest(requestOptions);
                    //now try the request again
                    return requestDelegate();
                }, (pError) => {
                    //auth failed, so return the error
                    return Promise.reject(pError);
                });
            }
            else {
                //other errors just forward
                return Promise.reject(pError);
            }
        });
    }
}
exports.CookieAuth = CookieAuth;
class Client {
    constructor(pBaseURL) {
        if (pBaseURL.endsWith('/'))
            pBaseURL = pBaseURL.substr(0, pBaseURL.length - 1);
        if (pBaseURL.indexOf(HEADLIGHT_API_VERSION) < 0)
            pBaseURL = pBaseURL + '/' + HEADLIGHT_API_VERSION;
        this._BaseURL = pBaseURL;
        this._ApiReferences = {};
        this._Cookie = new CookieAuth(null, this);
        this._Auth = this.API(API.AuthenticateApi);
    }
    get UserSession() {
        return this._UserSession;
    }
    /**
     * Perform login operation, and keep session cookie for use in later API calls.
     */
    async login(pUsername, pPassword) {
        this._UserSession = null;
        var result = await this._Auth.authenticate({ UserName: pUsername, Password: pPassword });
        if (!result.UserID) {
            return Promise.reject('Login failure! Check username and password.');
        }
        this._UserSession = result;
        this._Cookie.setCredentials(result.SessionID, pUsername, pPassword);
        return Promise.resolve(result);
    }
    /**
     * Perform login operation, and keep session cookie for use in later API calls.
     */
    async loginWithToken(pSessionToken) {
        this._UserSession = null;
        this._Cookie.setToken(null, pSessionToken);
        var result = await this._Auth.checkSession();
        if (!result.UserID) {
            return Promise.reject('Login failure! Check if token is still valid.');
        }
        this._UserSession = result;
        this._Cookie.setToken(result.SessionID, pSessionToken);
        return Promise.resolve(result);
    }
    /**
     * Get reference to an API, and configure it according to current state of client.
     */
    API(pApiType) {
        let apiObject = this._ApiReferences[pApiType.name];
        if (!apiObject)
            apiObject = new pApiType(this._BaseURL);
        this._ApiReferences[pApiType.name] = apiObject;
        apiObject.setDefaultAuthentication(this._Cookie);
        return apiObject;
    }
    /**
     * Get reference to an API, and configure it according to current state of client.
     */
    Repository(pApiType, pORMType) {
        let apiObject = this.API(pApiType);
        return new Repository(apiObject, pORMType);
    }
}
exports.Client = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9ub2RlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0VBTUU7O0FBRUYsNkJBQTZCO0FBRXBCLGtCQUFHO0FBRFosK0RBQWdFO0FBS2hFLE1BQU0scUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBYXBDLGdCQUEyQixTQUFRLHFDQUFpQjtJQUVoRCxZQUFvQixTQUF3QixFQUFFLE9BQXVCO1FBRWpFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUZDLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFHeEMseURBQXlEO1FBQ3pELCtEQUErRDtRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBc0IsRUFBRSxlQUFvQjtRQUVwRCxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBc0IsRUFBRSxlQUFvQjtRQUV4RCxNQUFNLGtCQUFrQixDQUFDO0lBQzdCLENBQUM7SUFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQXNCLEVBQUUsZUFBb0I7UUFFcEQsSUFBSSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN4QixDQUFDO0NBQ0o7QUF2QkQsZ0NBdUJDO0FBRUQ7SUFLSSxZQUFvQixTQUFpQixFQUFVLE1BQWM7UUFBekMsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENB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