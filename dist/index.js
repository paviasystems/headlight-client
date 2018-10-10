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
    }
    applyToRequest(requestOptions) {
        if (this.sessionId) {
            requestOptions.headers['Cookie'] = 'UserSession=' + this.sessionId;
        }
    }
    executeWithAuth(requestOptions, requestDelegate) {
        return requestDelegate().then((result) => {
            return Promise.resolve(result);
        }, (pError) => {
            //TODO: should implement with statusCode
            if (this.sessionId && pError && pError.indexOf('authenticated')) {
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
        this._Auth = new API.AuthenticateApi(pBaseURL);
        this._Cookie = new CookieAuth(null, this);
    }
    get UserSession() {
        return this._UserSession;
    }
    /**
     * Perform login operation, and keep session cookie for use in later API calls.
     */
    async login(pUsername, pPassword) {
        var result = await this._Auth.authenticate({ UserName: pUsername, Password: pPassword });
        if (!result.UserID) {
            return Promise.reject('Login failure! Check username and password.');
        }
        this._UserSession = result;
        this._Cookie.setCredentials(result.SessionID, pUsername, pPassword);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9ub2RlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0VBTUU7O0FBRUYsNkJBQTZCO0FBRXBCLGtCQUFHO0FBRFosK0RBQWdFO0FBS2hFLE1BQU0scUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBYXBDLGdCQUEyQixTQUFRLHFDQUFpQjtJQUVoRCxZQUFvQixTQUF3QixFQUFFLE9BQXVCO1FBRWpFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUZDLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFHeEMseURBQXlEO1FBQ3pELCtEQUErRDtRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBc0IsRUFBRSxlQUFvQjtRQUVwRCxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBc0IsRUFBRSxlQUFvQjtRQUV4RCxNQUFNLGtCQUFrQixDQUFDO0lBQzdCLENBQUM7SUFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQXNCLEVBQUUsZUFBb0I7UUFFcEQsSUFBSSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN4QixDQUFDO0NBQ0o7QUF2QkQsZ0NBdUJDO0FBRUQ7SUFJSSxZQUFvQixTQUFpQixFQUFVLE1BQWM7UUFBekMsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFVLFdBQU0sR0FBTixNQUFNLENB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