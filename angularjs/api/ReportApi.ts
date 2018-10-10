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

export class ReportApi {
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
        const localVarPath = this.basePath + '/Report/{id}'
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
     * Meadow COUNT
     */
    public count (extraHttpRequestParams?: any ) : ng.IHttpPromise<models.InlineResponse200> {
        const localVarPath = this.basePath + '/Reports/Count';

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
        const localVarPath = this.basePath + '/Reports/FilteredTo/{filter}/Count'
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
    public create (body: models.ReportModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ReportModel> {
        const localVarPath = this.basePath + '/Report';

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
     * Get list of available render types for a document type. (pdf, html, etc.)
     * @param ReportType Report type name (e.g. &#39;DCR&#39;, &#39;Headlight-Daily&#39;, etc)
     */
    public getDocumentRenderByType (ReportType: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Report/{ReportType}'
            .replace('{' + 'ReportType' + '}', encodeURIComponent(String(ReportType)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'ReportType' is not null or undefined
        if (ReportType === null || ReportType === undefined) {
            throw new Error('Required parameter ReportType was null or undefined when calling getDocumentRenderByType.');
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
     * Request to render a report. To get rendered files, use getReportStageFile() Example HTML flow: 1. Request /Report/Render/1247/default 2. Extract GUIDReportDescription (i.e. \"0x5984be9c8b000000\") from response object. 3. Open a new browser tab to: /Report/0x5984be9c8b000000/ 4. Rendered html page will subsequently request assets (images, css, etc)
     * @param IDDocument ID of record
     * @param Renderer Render format (default, html, pdf, json, etc)
     */
    public getRenderReport (IDDocument: number, Renderer: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ReportRenderResult> {
        const localVarPath = this.basePath + '/Report/Render/{IDDocument}/{Renderer}'
            .replace('{' + 'IDDocument' + '}', encodeURIComponent(String(IDDocument)))
            .replace('{' + 'Renderer' + '}', encodeURIComponent(String(Renderer)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDDocument' is not null or undefined
        if (IDDocument === null || IDDocument === undefined) {
            throw new Error('Required parameter IDDocument was null or undefined when calling getRenderReport.');
        }

        // verify required parameter 'Renderer' is not null or undefined
        if (Renderer === null || Renderer === undefined) {
            throw new Error('Required parameter Renderer was null or undefined when calling getRenderReport.');
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
     * Source JSON datum used to generate the report.
     * @param ReportUUID UUID of completed report render.
     */
    public getReportDatum (ReportUUID: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Report/Datum/{ReportUUID}'
            .replace('{' + 'ReportUUID' + '}', encodeURIComponent(String(ReportUUID)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'ReportUUID' is not null or undefined
        if (ReportUUID === null || ReportUUID === undefined) {
            throw new Error('Required parameter ReportUUID was null or undefined when calling getReportDatum.');
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
     * Manifest (JSON metadata file) about the rendered report. Includes information about other generated assets.
     * @param ReportUUID UUID of completed report render.
     */
    public getReportManifest (ReportUUID: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Report/Manifest/{ReportUUID}'
            .replace('{' + 'ReportUUID' + '}', encodeURIComponent(String(ReportUUID)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'ReportUUID' is not null or undefined
        if (ReportUUID === null || ReportUUID === undefined) {
            throw new Error('Required parameter ReportUUID was null or undefined when calling getReportManifest.');
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
     * Get staged (rendered) file for a previously rendered report.
     * @param ReportUUID UUID of completed report render.
     * @param StageFilePath Subpath to file in rendered report stage dir
     */
    public getReportStageFile (ReportUUID: string, StageFilePath: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
        const localVarPath = this.basePath + '/Report/{ReportUUID}/{StageFilePath}'
            .replace('{' + 'ReportUUID' + '}', encodeURIComponent(String(ReportUUID)))
            .replace('{' + 'StageFilePath' + '}', encodeURIComponent(String(StageFilePath)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'ReportUUID' is not null or undefined
        if (ReportUUID === null || ReportUUID === undefined) {
            throw new Error('Required parameter ReportUUID was null or undefined when calling getReportStageFile.');
        }

        // verify required parameter 'StageFilePath' is not null or undefined
        if (StageFilePath === null || StageFilePath === undefined) {
            throw new Error('Required parameter StageFilePath was null or undefined when calling getReportStageFile.');
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
     * 
     * @param body 
     */
    public postReadCountQuery (body: models.QueryRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.InlineResponse200> {
        const localVarPath = this.basePath + '/Report/query/count';

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
    public postReadQuery (body: models.QueryRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.ReportModel>> {
        const localVarPath = this.basePath + '/Report/query/read';

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
    public read (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ReportModel> {
        const localVarPath = this.basePath + '/Report/{id}'
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
    public reads (begin: number, max: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.ReportModel>> {
        const localVarPath = this.basePath + '/Reports/{begin}/{max}'
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
    public readsFiltered (filter: string, begin: number, max: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.ReportModel>> {
        const localVarPath = this.basePath + '/Reports/FilteredTo/{filter}/{begin}/{max}'
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
     * Meadow PUT (Update)
     * @param body 
     */
    public update (body: models.ReportModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ReportModel> {
        const localVarPath = this.basePath + '/Report';

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
}
