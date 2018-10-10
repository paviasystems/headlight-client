/**
 * HeadlightAPI
 * Pavia Headlight API Server
 *
 * OpenAPI spec version: 0.0.12
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class UserApi {
    protected basePath = 'https://localhost/1.0';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * Meadow DELETE
     * @param id ID of record
     */
    public _delete (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<boolean> {
        const localVarPath = this.basePath + '/User/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Check if an email is already in use
     * @param Email 
     */
    public checkEmail (Email: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/User/CheckEmail/{Email}'
            .replace('{' + 'Email' + '}', encodeURIComponent(String(Email)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'Email' is not null or undefined
        if (Email === null || Email === undefined) {
            throw new Error('Required parameter Email was null or undefined when calling checkEmail.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Check if a LoginID is already in use
     * @param LoginID 
     */
    public checkLoginID (LoginID: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/User/CheckLoginID/{LoginID}'
            .replace('{' + 'LoginID' + '}', encodeURIComponent(String(LoginID)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'LoginID' is not null or undefined
        if (LoginID === null || LoginID === undefined) {
            throw new Error('Required parameter LoginID was null or undefined when calling checkLoginID.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Email confirmation link for self-signup user
     * @param EmailConfirmHash Hash code sent in confirmation email
     */
    public confirmEmail (EmailConfirmHash: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/User/ConfirmEmail/{EmailConfirmHash}'
            .replace('{' + 'EmailConfirmHash' + '}', encodeURIComponent(String(EmailConfirmHash)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'EmailConfirmHash' is not null or undefined
        if (EmailConfirmHash === null || EmailConfirmHash === undefined) {
            throw new Error('Required parameter EmailConfirmHash was null or undefined when calling confirmEmail.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Meadow COUNT
     */
    public count (extraHttpRequestParams?: any ) : ng.IHttpPromise<models.InlineResponse200> {
        const localVarPath = this.basePath + '/Users/Count';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Meadow COUNT with filter
     * @param filter FBV meadow filter
     */
    public countFiltered (filter: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.InlineResponse200> {
        const localVarPath = this.basePath + '/Users/FilteredTo/{filter}/Count'
            .replace('{' + 'filter' + '}', encodeURIComponent(String(filter)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling countFiltered.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Meadow POST (Create)
     * @param body 
     */
    public create (body: models.UserModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.UserModel> {
        const localVarPath = this.basePath + '/User';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling create.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: body,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * User forgot password email with link
     * @param Email 
     */
    public forgotPassword (Email: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/User/ForgotPassword/{Email}'
            .replace('{' + 'Email' + '}', encodeURIComponent(String(Email)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'Email' is not null or undefined
        if (Email === null || Email === undefined) {
            throw new Error('Required parameter Email was null or undefined when calling forgotPassword.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Get Avtive Users list 
     */
    public getActiveUsers (extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/User/Active';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Send version and last update dates for various 
     */
    public getSyncIndicator (extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/User/SyncIndicator';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @param body 
     */
    public postReadCountQuery (body: models.QueryRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.InlineResponse200> {
        const localVarPath = this.basePath + '/User/query/count';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postReadCountQuery.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: body,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * 
     * @param body 
     */
    public postReadQuery (body: models.QueryRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.UserModel>> {
        const localVarPath = this.basePath + '/User/query/read';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postReadQuery.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: body,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Meadow READ
     * @param id ID of record
     */
    public read (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.UserModel> {
        const localVarPath = this.basePath + '/User/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling read.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Meadow READ list
     * @param begin Beginning (skip) number of records (to page)
     * @param max Maximum number of records to return
     */
    public reads (begin: number, max: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.UserModel>> {
        const localVarPath = this.basePath + '/Users/{begin}/{max}'
            .replace('{' + 'begin' + '}', encodeURIComponent(String(begin)))
            .replace('{' + 'max' + '}', encodeURIComponent(String(max)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'begin' is not null or undefined
        if (begin === null || begin === undefined) {
            throw new Error('Required parameter begin was null or undefined when calling reads.');
        }

        // verify required parameter 'max' is not null or undefined
        if (max === null || max === undefined) {
            throw new Error('Required parameter max was null or undefined when calling reads.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Meadow READ filtered list
     * @param filter FBV meadow filter
     * @param begin Beginning (skip) number of records (to page)
     * @param max Maximum number of records to return
     */
    public readsFiltered (filter: string, begin: number, max: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.UserModel>> {
        const localVarPath = this.basePath + '/Users/FilteredTo/{filter}/{begin}/{max}'
            .replace('{' + 'filter' + '}', encodeURIComponent(String(filter)))
            .replace('{' + 'begin' + '}', encodeURIComponent(String(begin)))
            .replace('{' + 'max' + '}', encodeURIComponent(String(max)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling readsFiltered.');
        }

        // verify required parameter 'begin' is not null or undefined
        if (begin === null || begin === undefined) {
            throw new Error('Required parameter begin was null or undefined when calling readsFiltered.');
        }

        // verify required parameter 'max' is not null or undefined
        if (max === null || max === undefined) {
            throw new Error('Required parameter max was null or undefined when calling readsFiltered.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Request to resend confirmation email (user email must not be confirmed yet)
     * @param Email 
     */
    public resendConfirmationEmail (Email: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/User/ResendConfirmationEmail/{Email}'
            .replace('{' + 'Email' + '}', encodeURIComponent(String(Email)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'Email' is not null or undefined
        if (Email === null || Email === undefined) {
            throw new Error('Required parameter Email was null or undefined when calling resendConfirmationEmail.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * User self-signup
     * @param body 
     */
    public signupUser (body: models.UserSignupRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/User/Signup';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling signupUser.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: body,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Meadow PUT (Update)
     * @param body 
     */
    public update (body: models.UserModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.UserModel> {
        const localVarPath = this.basePath + '/User';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling update.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'PUT',
            url: localVarPath,
            data: body,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
     * Change user password *
     * @param body 
     */
    public updatePassword (body: models.ChangePasswordRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Password';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updatePassword.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: body,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
