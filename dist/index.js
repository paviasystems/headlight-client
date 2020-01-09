"use strict";
/**
* The Headlight API client for NodeJS
*
* @license Pavia Systems, All Rights Reserved
*
* @author Jason Hillier <jason.hillier@paviasystems.com>
*/
Object.defineProperty(exports, "__esModule", { value: true });
const util = require('util');
const libFS = require('fs');
const libRm = require('rimraf');
const API = require("./api");
exports.API = API;
const Request = require("request");
const ts_repository_fluent_1 = require("ts-repository-fluent");
const uuid_1 = require("uuid");
const HEADLIGHT_API_VERSION = '1.0';
const BUFFER_DIR = 'buffer/'; //prepare a buffer directory for operations that require file-on-disk
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
        return await this._apiClass.postReadsLiteQuery(pQuery.packageQuery());
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
    setOptions(options, body) {
        options = options ? options : {};
        if (!options.hasOwnProperty('json'))
            options.json = true;
        if (!options.hasOwnProperty('headers'))
            options.headers = [];
        if (!options.hasOwnProperty('qs'))
            options.qs = [];
        if (!options.hasOwnProperty('baseUrl'))
            options.baseUrl = this._BaseURL;
        this._Cookie.applyToRequest(options);
        options.body = body;
        return options;
    }
    processResponse(response) {
        if (!response || !response.body || response.body.error || response.body.Error) {
            var error = "";
            if (response && response.body) {
                error = response.body.error || response.body.Error;
            }
            return Promise.reject("Response error: " + error);
        }
        else {
            return Promise.resolve(response.body);
        }
    }
    async GET(url, options) {
        options = this.setOptions(options);
        var response = await util.promisify(Request.get)(url, options);
        return this.processResponse(response);
    }
    async POST(url, body, options) {
        options = this.setOptions(options, body);
        var response = await util.promisify(Request.post)(url, options);
        return this.processResponse(response);
    }
    async PUT(url, body, options) {
        options = this.setOptions(options, body);
        var response = await util.promisify(Request.put)(url, options);
        return this.processResponse(response);
    }
    async DELETE(url, options) {
        options = this.setOptions(options);
        var response = await util.promisify(Request.delete)(url, options);
        await this.processResponse(response);
        return Promise.resolve(response.body.count);
    }
    async getAllRecordsPaged(pUrl, pOptions, pSize, fIterator) {
        return util.promisify(this._getAllRecordsPaged.bind(this))(pUrl, pOptions, pSize, fIterator);
    }
    _getAllRecordsPaged(pUrl, pOptions, pSize, fIterator, fCallback) {
        if (!fIterator) {
            fIterator = (pError, tmpRecords, fNext) => {
                return fNext();
            };
        }
        if (!pOptions)
            pOptions = {};
        if (!pOptions.Page)
            pOptions.Page = 0;
        if (!pOptions.AllRecords)
            pOptions.AllRecords = [];
        var pError = null;
        pOptions = this.setOptions(pOptions, pOptions.body);
        this.getHttpRequestMethod(pOptions)(`${pUrl}/${pOptions.Page}/${pSize}`, pOptions, (err, pResponse) => {
            if (!pResponse)
                pError = `Failed to Get Records for ${pUrl}!`;
            let tmpRecords = pResponse.body;
            pOptions.AllRecords = pOptions.AllRecords.concat(tmpRecords);
            //Call invoker's iterator function
            fIterator(pError, tmpRecords, (pIterError, pIterStop) => {
                if (pIterError) {
                    let tmpResults = pOptions.AllRecords;
                    delete pOptions['Page'];
                    delete pOptions['AllRecords'];
                    return fCallback(pIterError, tmpResults);
                }
                else if (pIterStop) {
                    let tmpResults = pOptions.AllRecords;
                    delete pOptions['Page'];
                    delete pOptions['AllRecords'];
                    return fCallback(null, tmpResults);
                }
                else {
                    if (!tmpRecords.length ||
                        tmpRecords.length < pSize) {
                        let tmpResults = pOptions.AllRecords;
                        delete pOptions['Page'];
                        delete pOptions['AllRecords'];
                        return fCallback(null, tmpResults); //no more records to get
                    }
                    else {
                        pOptions.Page += tmpRecords.length;
                        //recurse
                        return this._getAllRecordsPaged(pUrl, pOptions, pSize, fIterator, fCallback);
                    }
                }
            });
        });
    }
    getHttpRequestMethod(pOptions) {
        if (!pOptions.method)
            return Request.get;
        switch (pOptions.method) {
            case 'GET':
                return Request.get;
            case 'POST':
                return Request.post;
        }
    }
    /**
     * HTTP GET basic file download request to Headlight
     *
     * @method getFile
     */
    async getFile(pUrl) {
        return util.promisify(this._getFile.bind(this))(pUrl);
    }
    /**
     * HTTP GET basic file download request to Headlight
     *
     * @method _getFile
     */
    _getFile(pUrl, fCallback) {
        return this._getFileExtended(pUrl, { method: 'GET' }, fCallback);
    }
    /**
     * HTTP GET advanced file download request to Headlight
     *
     * @method getFileExtended
     */
    async getFileExtended(pUrl, pOptions) {
        return util.promisify(this._getFileExtended.bind(this))(pUrl, pOptions);
    }
    /**
     * HTTP GET advanced file download request to Headlight
     *
     * @method _getFileExtended
     */
    _getFileExtended(pUrl, pOptions, fCallback) {
        var tmpBufferFile = this.generateBufferFileName();
        pOptions = this.setOptions(pOptions, pOptions.body);
        var tmpErr;
        var tmpResponse;
        this.getHttpRequestMethod(pOptions)(pUrl, pOptions, (err, pResponse) => {
            tmpErr = err;
            tmpResponse = pResponse;
        })
            .once('error', (err) => {
            return fCallback(err);
        })
            .pipe(libFS.createWriteStream(tmpBufferFile))
            .once('close', () => {
            return fCallback(tmpErr, [tmpResponse, tmpBufferFile]);
        });
    }
    /**
     * Internal method to create temporary files on disk
     *
     * @method generateBufferFileName
     */
    generateBufferFileName() {
        try {
            if (!libFS.existsSync(BUFFER_DIR)) {
                libRm.sync(BUFFER_DIR);
                libFS.mkdirSync(BUFFER_DIR);
            }
        }
        catch (ex) {
            console.log('Trouble accessing directory: ' + BUFFER_DIR);
        }
        return BUFFER_DIR + uuid_1.v4();
    }
}
exports.Client = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9ub2RlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0VBTUU7O0FBRUYsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFaEMsNkJBQTZCO0FBR3BCLGtCQUFHO0FBRlosbUNBQW1DO0FBQ25DLCtEQUFnRTtBQUVoRSwrQkFBa0M7QUFJbEMsTUFBTSxxQkFBcUIsR0FBRyxLQUFLLENBQUM7QUFDcEMsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUMscUVBQXFFO0FBZW5HLGdCQUEyQixTQUFRLHFDQUFpQjtJQUVoRCxZQUFvQixTQUF3QixFQUFFLE9BQXVCO1FBRWpFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUZDLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFHeEMseURBQXlEO1FBQ3pELCtEQUErRDtRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBc0IsRUFBRSxlQUFvQjtRQUVwRCxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUNELEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBc0IsRUFBRSxlQUFvQjtRQUV4RCxPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0QsS0FB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