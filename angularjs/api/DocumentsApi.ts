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

export class DocumentsApi {
    protected basePath = 'https://localhost/1.0';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
     * Get all Document records for this user that have changed since the sync date
     * @param SynchronizeFromDate FROM date (descending)
     * @param Begin Beginning (skip) number of records (to page)
     * @param Cap Maximum number of records to return
     */
    public getUpdatedDocuments (SynchronizeFromDate: Date, Begin: number, Cap: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Documents/Sync/{SynchronizeFromDate}/{Begin}/{Cap}'
            .replace('{' + 'SynchronizeFromDate' + '}', encodeURIComponent(String(SynchronizeFromDate)))
            .replace('{' + 'Begin' + '}', encodeURIComponent(String(Begin)))
            .replace('{' + 'Cap' + '}', encodeURIComponent(String(Cap)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'SynchronizeFromDate' is not null or undefined
        if (SynchronizeFromDate === null || SynchronizeFromDate === undefined) {
            throw new Error('Required parameter SynchronizeFromDate was null or undefined when calling getUpdatedDocuments.');
        }

        // verify required parameter 'Begin' is not null or undefined
        if (Begin === null || Begin === undefined) {
            throw new Error('Required parameter Begin was null or undefined when calling getUpdatedDocuments.');
        }

        // verify required parameter 'Cap' is not null or undefined
        if (Cap === null || Cap === undefined) {
            throw new Error('Required parameter Cap was null or undefined when calling getUpdatedDocuments.');
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
     * Sync Documents  Process (since this is so complex): 1. FOR EACH Document     1.1 Archive the Document     1.2 Merge in the Changes     1.5 After all Detail records are successfully stored, Update Document so Document.definition contains the serialized array of Details 2. Get all Document records for this user that have changed since the sync date
     * @param SynchronizeFromDate FROM date (descending)
     * @param Begin Beginning (skip) number of records (to page)
     * @param Cap Maximum number of records to return
     */
    public syncDocuments (SynchronizeFromDate: Date, Begin: number, Cap: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Documents/Sync/{SynchronizeFromDate}/{Begin}/{Cap}'
            .replace('{' + 'SynchronizeFromDate' + '}', encodeURIComponent(String(SynchronizeFromDate)))
            .replace('{' + 'Begin' + '}', encodeURIComponent(String(Begin)))
            .replace('{' + 'Cap' + '}', encodeURIComponent(String(Cap)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'SynchronizeFromDate' is not null or undefined
        if (SynchronizeFromDate === null || SynchronizeFromDate === undefined) {
            throw new Error('Required parameter SynchronizeFromDate was null or undefined when calling syncDocuments.');
        }

        // verify required parameter 'Begin' is not null or undefined
        if (Begin === null || Begin === undefined) {
            throw new Error('Required parameter Begin was null or undefined when calling syncDocuments.');
        }

        // verify required parameter 'Cap' is not null or undefined
        if (Cap === null || Cap === undefined) {
            throw new Error('Required parameter Cap was null or undefined when calling syncDocuments.');
        }

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
