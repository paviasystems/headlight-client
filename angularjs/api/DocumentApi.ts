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

export class DocumentApi {
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
        const localVarPath = this.basePath + '/Document/{id}'
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
     * 
     * @param IDComment ID of record
     * @param IDDocument ID of record
     */
    public addCommentsToDocument (IDComment: number, IDDocument: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
        const localVarPath = this.basePath + '/Document/{IDDocument}/Comment/Add/{IDComment}'
            .replace('{' + 'IDComment' + '}', encodeURIComponent(String(IDComment)))
            .replace('{' + 'IDDocument' + '}', encodeURIComponent(String(IDDocument)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDComment' is not null or undefined
        if (IDComment === null || IDComment === undefined) {
            throw new Error('Required parameter IDComment was null or undefined when calling addCommentsToDocument.');
        }

        // verify required parameter 'IDDocument' is not null or undefined
        if (IDDocument === null || IDDocument === undefined) {
            throw new Error('Required parameter IDDocument was null or undefined when calling addCommentsToDocument.');
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
     * @param IDObservation ID of record
     * @param IDDocument ID of record
     */
    public addDocumentObservation (IDObservation: number, IDDocument: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Document/{IDDocument}/AddObservation/{IDObservation}'
            .replace('{' + 'IDObservation' + '}', encodeURIComponent(String(IDObservation)))
            .replace('{' + 'IDDocument' + '}', encodeURIComponent(String(IDDocument)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDObservation' is not null or undefined
        if (IDObservation === null || IDObservation === undefined) {
            throw new Error('Required parameter IDObservation was null or undefined when calling addDocumentObservation.');
        }

        // verify required parameter 'IDDocument' is not null or undefined
        if (IDDocument === null || IDDocument === undefined) {
            throw new Error('Required parameter IDDocument was null or undefined when calling addDocumentObservation.');
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
        const localVarPath = this.basePath + '/Documents/Count';

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
        const localVarPath = this.basePath + '/Documents/FilteredTo/{filter}/Count'
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
    public create (body: models.DocumentModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.DocumentModel> {
        const localVarPath = this.basePath + '/Document';

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
     * Get Document count form beginning of month in Customer timezone UP TO target DocumentID
     * @param IDDocument ID of record
     */
    public getDocumentCountBySequenceNumber (IDDocument: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Document/{IDDocument}/SequenceNumber/Monthly'
            .replace('{' + 'IDDocument' + '}', encodeURIComponent(String(IDDocument)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDDocument' is not null or undefined
        if (IDDocument === null || IDDocument === undefined) {
            throw new Error('Required parameter IDDocument was null or undefined when calling getDocumentCountBySequenceNumber.');
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
     * Generate a DCR in HTML format
     * @param IDDocument ID of record
     */
    public getDocumentHTML (IDDocument: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Document/{IDDocument}/DCR.html'
            .replace('{' + 'IDDocument' + '}', encodeURIComponent(String(IDDocument)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDDocument' is not null or undefined
        if (IDDocument === null || IDDocument === undefined) {
            throw new Error('Required parameter IDDocument was null or undefined when calling getDocumentHTML.');
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
     * Generate a DCR in JSON format
     * @param IDDocument ID of record
     */
    public getDocumentJSON (IDDocument: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Document/{IDDocument}/DCR.json'
            .replace('{' + 'IDDocument' + '}', encodeURIComponent(String(IDDocument)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDDocument' is not null or undefined
        if (IDDocument === null || IDDocument === undefined) {
            throw new Error('Required parameter IDDocument was null or undefined when calling getDocumentJSON.');
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
     * Generate a DCR in PDF format
     * @param IDDocument ID of record
     */
    public getDocumentPDF (IDDocument: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
        const localVarPath = this.basePath + '/Document/{IDDocument}/DCR.pdf'
            .replace('{' + 'IDDocument' + '}', encodeURIComponent(String(IDDocument)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDDocument' is not null or undefined
        if (IDDocument === null || IDDocument === undefined) {
            throw new Error('Required parameter IDDocument was null or undefined when calling getDocumentPDF.');
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
     * Get Report Parameters that being sent to the report service
     * @param IDDocument ID of record
     */
    public getDocumentReportParameters (IDDocument: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Document/{IDDocument}/ReportParameters'
            .replace('{' + 'IDDocument' + '}', encodeURIComponent(String(IDDocument)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDDocument' is not null or undefined
        if (IDDocument === null || IDDocument === undefined) {
            throw new Error('Required parameter IDDocument was null or undefined when calling getDocumentReportParameters.');
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
     * postCloneBulkDocuments API
     * @param body 
     */
    public postCloneBulkDocuments (body: models.DocumentCloneRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.DocumentModel>> {
        const localVarPath = this.basePath + '/Documents/Clone';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postCloneBulkDocuments.');
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
     * postCloneDocument API
     * @param IDDocument ID of record
     */
    public postCloneDocument (IDDocument: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.DocumentModel> {
        const localVarPath = this.basePath + '/Document/{IDDocument}/Clone'
            .replace('{' + 'IDDocument' + '}', encodeURIComponent(String(IDDocument)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDDocument' is not null or undefined
        if (IDDocument === null || IDDocument === undefined) {
            throw new Error('Required parameter IDDocument was null or undefined when calling postCloneDocument.');
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
    /**
     * Allows a report to perform a bulk upsert in context of a document.
     * @param body 
     */
    public postFormProcessor (body: models.FormProcessorRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.FormProcessorRequest> {
        const localVarPath = this.basePath + '/Document/FormProcessor';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postFormProcessor.');
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
    public postReadCountQuery (body: models.QueryRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.InlineResponse200> {
        const localVarPath = this.basePath + '/Document/query/count';

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
    public postReadQuery (body: models.QueryRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.DocumentModel>> {
        const localVarPath = this.basePath + '/Document/query/read';

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
     * 
     * @param body 
     */
    public postReadsLiteQuery (body: models.QueryRequest, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.DocumentModel>> {
        const localVarPath = this.basePath + '/Document/query/readsLite';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postReadsLiteQuery.');
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
    public read (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.DocumentModel> {
        const localVarPath = this.basePath + '/Document/{id}'
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
    public reads (begin: number, max: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.DocumentModel>> {
        const localVarPath = this.basePath + '/Documents/{begin}/{max}'
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
     * Meadow READ by field value
     * @param field field name
     * @param begin Beginning (skip) number of records (to page)
     * @param max Maximum number of records to return
     * @param value WHERE field value
     */
    public readsByValue (field: string, begin: number, max: number, value: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.DocumentModel>> {
        const localVarPath = this.basePath + '/Documents/By/{field}/{value}/{begin}/{max}'
            .replace('{' + 'field' + '}', encodeURIComponent(String(field)))
            .replace('{' + 'begin' + '}', encodeURIComponent(String(begin)))
            .replace('{' + 'max' + '}', encodeURIComponent(String(max)))
            .replace('{' + 'value' + '}', encodeURIComponent(String(value)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'field' is not null or undefined
        if (field === null || field === undefined) {
            throw new Error('Required parameter field was null or undefined when calling readsByValue.');
        }

        // verify required parameter 'begin' is not null or undefined
        if (begin === null || begin === undefined) {
            throw new Error('Required parameter begin was null or undefined when calling readsByValue.');
        }

        // verify required parameter 'max' is not null or undefined
        if (max === null || max === undefined) {
            throw new Error('Required parameter max was null or undefined when calling readsByValue.');
        }

        // verify required parameter 'value' is not null or undefined
        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling readsByValue.');
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
    public readsFiltered (filter: string, begin: number, max: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.DocumentModel>> {
        const localVarPath = this.basePath + '/Documents/FilteredTo/{filter}/{begin}/{max}'
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
     * 
     * @param IDObservation ID of record
     * @param IDDocument ID of record
     */
    public removeDocumentObservation (IDObservation: number, IDDocument: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Document/{IDDocument}/RemoveObservation/{IDObservation}'
            .replace('{' + 'IDObservation' + '}', encodeURIComponent(String(IDObservation)))
            .replace('{' + 'IDDocument' + '}', encodeURIComponent(String(IDDocument)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDObservation' is not null or undefined
        if (IDObservation === null || IDObservation === undefined) {
            throw new Error('Required parameter IDObservation was null or undefined when calling removeDocumentObservation.');
        }

        // verify required parameter 'IDDocument' is not null or undefined
        if (IDDocument === null || IDDocument === undefined) {
            throw new Error('Required parameter IDDocument was null or undefined when calling removeDocumentObservation.');
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
     * Attach an ElectronicSignature to a Document
     * @param IDElectronicSignature ID of record
     * @param IDDocument ID of record
     */
    public signDocument (IDElectronicSignature: number, IDDocument: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Document/Sign/{IDDocument}/{IDElectronicSignature}'
            .replace('{' + 'IDElectronicSignature' + '}', encodeURIComponent(String(IDElectronicSignature)))
            .replace('{' + 'IDDocument' + '}', encodeURIComponent(String(IDDocument)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDElectronicSignature' is not null or undefined
        if (IDElectronicSignature === null || IDElectronicSignature === undefined) {
            throw new Error('Required parameter IDElectronicSignature was null or undefined when calling signDocument.');
        }

        // verify required parameter 'IDDocument' is not null or undefined
        if (IDDocument === null || IDDocument === undefined) {
            throw new Error('Required parameter IDDocument was null or undefined when calling signDocument.');
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
     * UNDelete a specific Document
     * @param IDDocument ID of record
     */
    public undeleteDocument (IDDocument: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Document/Undelete/{IDDocument}'
            .replace('{' + 'IDDocument' + '}', encodeURIComponent(String(IDDocument)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDDocument' is not null or undefined
        if (IDDocument === null || IDDocument === undefined) {
            throw new Error('Required parameter IDDocument was null or undefined when calling undeleteDocument.');
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
    public update (body: models.DocumentModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.DocumentModel> {
        const localVarPath = this.basePath + '/Document';

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
     * Update Document ExternalSyncDate field
     */
    public updateDocumentExternalSyncDate (extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Document/UpdateExternalSyncDate';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
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
