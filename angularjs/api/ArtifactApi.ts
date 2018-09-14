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

export class ArtifactApi {
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
        const localVarPath = this.basePath + '/Artifact/{id}'
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
     * Switch Artifact records Sync flag
     * @param IDArtifact ID of record
     */
    public clearArtifactSyncFlag (IDArtifact: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Artifact/{IDArtifact}/ClearSyncFlag'
            .replace('{' + 'IDArtifact' + '}', encodeURIComponent(String(IDArtifact)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDArtifact' is not null or undefined
        if (IDArtifact === null || IDArtifact === undefined) {
            throw new Error('Required parameter IDArtifact was null or undefined when calling clearArtifactSyncFlag.');
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
     * Copy Artifact media from ID to target ID
     * @param IDObservationArtifact ID of record
     * @param IDTargetArtifact ID of record
     * @param ArtifactVersion 
     * @param TargetArtifactVersion 
     */
    public copyArtifact (IDObservationArtifact: number, IDTargetArtifact: number, ArtifactVersion: number, TargetArtifactVersion: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Artifact/Media/{IDObservationArtifact}/{ArtifactVersion}/CopyTo/{IDTargetArtifact}/{TargetArtifactVersion}'
            .replace('{' + 'IDObservationArtifact' + '}', encodeURIComponent(String(IDObservationArtifact)))
            .replace('{' + 'IDTargetArtifact' + '}', encodeURIComponent(String(IDTargetArtifact)))
            .replace('{' + 'ArtifactVersion' + '}', encodeURIComponent(String(ArtifactVersion)))
            .replace('{' + 'TargetArtifactVersion' + '}', encodeURIComponent(String(TargetArtifactVersion)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDObservationArtifact' is not null or undefined
        if (IDObservationArtifact === null || IDObservationArtifact === undefined) {
            throw new Error('Required parameter IDObservationArtifact was null or undefined when calling copyArtifact.');
        }

        // verify required parameter 'IDTargetArtifact' is not null or undefined
        if (IDTargetArtifact === null || IDTargetArtifact === undefined) {
            throw new Error('Required parameter IDTargetArtifact was null or undefined when calling copyArtifact.');
        }

        // verify required parameter 'ArtifactVersion' is not null or undefined
        if (ArtifactVersion === null || ArtifactVersion === undefined) {
            throw new Error('Required parameter ArtifactVersion was null or undefined when calling copyArtifact.');
        }

        // verify required parameter 'TargetArtifactVersion' is not null or undefined
        if (TargetArtifactVersion === null || TargetArtifactVersion === undefined) {
            throw new Error('Required parameter TargetArtifactVersion was null or undefined when calling copyArtifact.');
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
        const localVarPath = this.basePath + '/Artifacts/Count';

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
        const localVarPath = this.basePath + '/Artifacts/FilteredTo/{filter}/Count'
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
    public create (body: models.ArtifactModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ArtifactModel> {
        const localVarPath = this.basePath + '/Artifact';

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
     * Download Artifact media file from Headlight
     * @param IDObservationArtifact ID of record
     * @param Size 
     */
    public downloadArtifact (IDObservationArtifact: number, Size: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<any> {
        const localVarPath = this.basePath + '/Artifact/Media/{IDObservationArtifact}/{ArtifactVersion}/{Size}'
            .replace('{' + 'IDObservationArtifact' + '}', encodeURIComponent(String(IDObservationArtifact)))
            .replace('{' + 'Size' + '}', encodeURIComponent(String(Size)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'IDObservationArtifact' is not null or undefined
        if (IDObservationArtifact === null || IDObservationArtifact === undefined) {
            throw new Error('Required parameter IDObservationArtifact was null or undefined when calling downloadArtifact.');
        }

        // verify required parameter 'Size' is not null or undefined
        if (Size === null || Size === undefined) {
            throw new Error('Required parameter Size was null or undefined when calling downloadArtifact.');
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
     * Get Artifact records for media types that don't have the Sync flag set
     */
    public getArtifactSyncList (extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.Artifact>> {
        const localVarPath = this.basePath + '/Artifact/Media/GetSyncList';

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
     * Meadow READ
     * @param id ID of record
     */
    public read (id: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ArtifactModel> {
        const localVarPath = this.basePath + '/Artifact/{id}'
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
    public reads (begin: number, max: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.ArtifactModel>> {
        const localVarPath = this.basePath + '/Artifacts/{begin}/{max}'
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
     * @param begin Beginning (skip) number of records (to page)
     * @param max Maximum number of records to return
     * @param filter FBV meadow filter
     */
    public readsFiltered (begin: number, max: number, filter: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<models.ArtifactModel>> {
        const localVarPath = this.basePath + '/Artifacts/FilteredTo/{filter}/{begin}/{max}'
            .replace('{' + 'begin' + '}', encodeURIComponent(String(begin)))
            .replace('{' + 'max' + '}', encodeURIComponent(String(max)))
            .replace('{' + 'filter' + '}', encodeURIComponent(String(filter)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'begin' is not null or undefined
        if (begin === null || begin === undefined) {
            throw new Error('Required parameter begin was null or undefined when calling readsFiltered.');
        }

        // verify required parameter 'max' is not null or undefined
        if (max === null || max === undefined) {
            throw new Error('Required parameter max was null or undefined when calling readsFiltered.');
        }

        // verify required parameter 'filter' is not null or undefined
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling readsFiltered.');
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
    public update (body: models.ArtifactModel, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.ArtifactModel> {
        const localVarPath = this.basePath + '/Artifact';

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
     * Upload Artifact media file to Headlight
     * @param file 
     * @param IDObservationArtifact ID of record
     * @param ArtifactVersion 
     */
    public uploadArtifact (file: any, IDObservationArtifact: number, ArtifactVersion: number, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/Artifact/Media/{IDObservationArtifact}/{ArtifactVersion}'
            .replace('{' + 'IDObservationArtifact' + '}', encodeURIComponent(String(IDObservationArtifact)))
            .replace('{' + 'ArtifactVersion' + '}', encodeURIComponent(String(ArtifactVersion)));

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let formParams: any = {};

        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling uploadArtifact.');
        }

        // verify required parameter 'IDObservationArtifact' is not null or undefined
        if (IDObservationArtifact === null || IDObservationArtifact === undefined) {
            throw new Error('Required parameter IDObservationArtifact was null or undefined when calling uploadArtifact.');
        }

        // verify required parameter 'ArtifactVersion' is not null or undefined
        if (ArtifactVersion === null || ArtifactVersion === undefined) {
            throw new Error('Required parameter ArtifactVersion was null or undefined when calling uploadArtifact.');
        }

        headerParams['Content-Type'] = 'application/x-www-form-urlencoded';

        formParams['file'] = file;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: this.$httpParamSerializer(formParams),
            params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
