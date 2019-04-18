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

export class DocumentApprovalApi {
    protected basePath = 'https://localhost/1.0';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * Get list of Approvers for Document
     * @param IDDocument ID of record
     */
    public getDocumentApproverList (IDDocument: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/DocumentApproval/{IDDocument}/ApproverList'
            .replace('{' + 'IDDocument' + '}', encodeURIComponent(String(IDDocument)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDDocument' is not null or undefined
        if (IDDocument === null || IDDocument === undefined) {
            throw new Error('Required parameter IDDocument was null or undefined when calling getDocumentApproverList.');
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
     * Get current Approval state of Document, and available actions for respective user as it relates to that state
     * @param IDDocument ID of record
     */
    public getDocumentState (IDDocument: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/DocumentApproval/{IDDocument}/State'
            .replace('{' + 'IDDocument' + '}', encodeURIComponent(String(IDDocument)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDDocument' is not null or undefined
        if (IDDocument === null || IDDocument === undefined) {
            throw new Error('Required parameter IDDocument was null or undefined when calling getDocumentState.');
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
     * Gets a filtered list of Documents, further filtered based of the ApprovalStatus relative to current user
     * @param Status Document Status
     * @param Begin Beginning (skip) number of records (to page)
     * @param Filter FBV meadow filter
     * @param Cap Maximum number of records to return
     */
    public getDocumentsByApprovalStatus (Status: string, Begin: number, Filter: string, Cap: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Documents/WithApprovalStatus/{Status}/FilteredTo/{Filter}/{Begin}/{Cap}'
            .replace('{' + 'Status' + '}', encodeURIComponent(String(Status)))
            .replace('{' + 'Begin' + '}', encodeURIComponent(String(Begin)))
            .replace('{' + 'Filter' + '}', encodeURIComponent(String(Filter)))
            .replace('{' + 'Cap' + '}', encodeURIComponent(String(Cap)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'Status' is not null or undefined
        if (Status === null || Status === undefined) {
            throw new Error('Required parameter Status was null or undefined when calling getDocumentsByApprovalStatus.');
        }

        // verify required parameter 'Begin' is not null or undefined
        if (Begin === null || Begin === undefined) {
            throw new Error('Required parameter Begin was null or undefined when calling getDocumentsByApprovalStatus.');
        }

        // verify required parameter 'Filter' is not null or undefined
        if (Filter === null || Filter === undefined) {
            throw new Error('Required parameter Filter was null or undefined when calling getDocumentsByApprovalStatus.');
        }

        // verify required parameter 'Cap' is not null or undefined
        if (Cap === null || Cap === undefined) {
            throw new Error('Required parameter Cap was null or undefined when calling getDocumentsByApprovalStatus.');
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
     * Get list of Documents where user can perform actions based on Approval Status, query direct from db
     * @param IDProject ID of record
     * @param Begin Beginning (skip) number of records (to page)
     * @param Status Document Status
     * @param Cap Maximum number of records to return
     */
    public getDocumentsQueryApprovalStatus (IDProject: number, Begin: number, Status: string, Cap: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Documents/QueryProjectApprovalStatus/{IDProject}/{Status}/{Begin}/{Cap}'
            .replace('{' + 'IDProject' + '}', encodeURIComponent(String(IDProject)))
            .replace('{' + 'Begin' + '}', encodeURIComponent(String(Begin)))
            .replace('{' + 'Status' + '}', encodeURIComponent(String(Status)))
            .replace('{' + 'Cap' + '}', encodeURIComponent(String(Cap)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDProject' is not null or undefined
        if (IDProject === null || IDProject === undefined) {
            throw new Error('Required parameter IDProject was null or undefined when calling getDocumentsQueryApprovalStatus.');
        }

        // verify required parameter 'Begin' is not null or undefined
        if (Begin === null || Begin === undefined) {
            throw new Error('Required parameter Begin was null or undefined when calling getDocumentsQueryApprovalStatus.');
        }

        // verify required parameter 'Status' is not null or undefined
        if (Status === null || Status === undefined) {
            throw new Error('Required parameter Status was null or undefined when calling getDocumentsQueryApprovalStatus.');
        }

        // verify required parameter 'Cap' is not null or undefined
        if (Cap === null || Cap === undefined) {
            throw new Error('Required parameter Cap was null or undefined when calling getDocumentsQueryApprovalStatus.');
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
     * Perform Approval state transition action against Document
     * @param body 
     */
    public postChangeDocumenttState (body: models.DocumentStateChangeRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/DocumentApproval';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postChangeDocumenttState.');
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
