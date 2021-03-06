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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Artifact } from '../model/artifact';
import { ArtifactModel } from '../model/artifactModel';
import { InlineResponse200 } from '../model/inlineResponse200';
import { QueryRequest } from '../model/queryRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ArtifactService {

    protected basePath = 'https://localhost/1.0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * Meadow DELETE
     * @param id ID of record
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public _delete(id: number, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public _delete(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public _delete(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public _delete(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling _delete.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<boolean>(`${this.basePath}/Artifact/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Switch Artifact records Sync flag
     * @param IDArtifact ID of record
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public clearArtifactSyncFlag(IDArtifact: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public clearArtifactSyncFlag(IDArtifact: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public clearArtifactSyncFlag(IDArtifact: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public clearArtifactSyncFlag(IDArtifact: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (IDArtifact === null || IDArtifact === undefined) {
            throw new Error('Required parameter IDArtifact was null or undefined when calling clearArtifactSyncFlag.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/Artifact/${encodeURIComponent(String(IDArtifact))}/ClearSyncFlag`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Copy Artifact media from ID to target ID
     * @param IDTargetArtifact ID of record
     * @param IDObservationArtifact ID of record
     * @param ArtifactVersion 
     * @param TargetArtifactVersion 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public copyArtifact(IDTargetArtifact: number, IDObservationArtifact: number, ArtifactVersion: number, TargetArtifactVersion: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public copyArtifact(IDTargetArtifact: number, IDObservationArtifact: number, ArtifactVersion: number, TargetArtifactVersion: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public copyArtifact(IDTargetArtifact: number, IDObservationArtifact: number, ArtifactVersion: number, TargetArtifactVersion: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public copyArtifact(IDTargetArtifact: number, IDObservationArtifact: number, ArtifactVersion: number, TargetArtifactVersion: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (IDTargetArtifact === null || IDTargetArtifact === undefined) {
            throw new Error('Required parameter IDTargetArtifact was null or undefined when calling copyArtifact.');
        }

        if (IDObservationArtifact === null || IDObservationArtifact === undefined) {
            throw new Error('Required parameter IDObservationArtifact was null or undefined when calling copyArtifact.');
        }

        if (ArtifactVersion === null || ArtifactVersion === undefined) {
            throw new Error('Required parameter ArtifactVersion was null or undefined when calling copyArtifact.');
        }

        if (TargetArtifactVersion === null || TargetArtifactVersion === undefined) {
            throw new Error('Required parameter TargetArtifactVersion was null or undefined when calling copyArtifact.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/Artifact/Media/${encodeURIComponent(String(IDObservationArtifact))}/${encodeURIComponent(String(ArtifactVersion))}/CopyTo/${encodeURIComponent(String(IDTargetArtifact))}/${encodeURIComponent(String(TargetArtifactVersion))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Meadow COUNT
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public count(observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    public count(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    public count(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    public count(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse200>(`${this.basePath}/Artifacts/Count`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Meadow COUNT with filter
     * @param filter FBV meadow filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public countFiltered(filter: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    public countFiltered(filter: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    public countFiltered(filter: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    public countFiltered(filter: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling countFiltered.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<InlineResponse200>(`${this.basePath}/Artifacts/FilteredTo/${encodeURIComponent(String(filter))}/Count`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Meadow POST (Create)
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public create(body: ArtifactModel, observe?: 'body', reportProgress?: boolean): Observable<ArtifactModel>;
    public create(body: ArtifactModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ArtifactModel>>;
    public create(body: ArtifactModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ArtifactModel>>;
    public create(body: ArtifactModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling create.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<ArtifactModel>(`${this.basePath}/Artifact`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Download Artifact media file from Headlight
     * @param IDObservationArtifact ID of record
     * @param Size 
     * @param ArtifactVersion 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public downloadArtifact(IDObservationArtifact: number, Size: string, ArtifactVersion: string, observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    public downloadArtifact(IDObservationArtifact: number, Size: string, ArtifactVersion: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    public downloadArtifact(IDObservationArtifact: number, Size: string, ArtifactVersion: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
    public downloadArtifact(IDObservationArtifact: number, Size: string, ArtifactVersion: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (IDObservationArtifact === null || IDObservationArtifact === undefined) {
            throw new Error('Required parameter IDObservationArtifact was null or undefined when calling downloadArtifact.');
        }

        if (Size === null || Size === undefined) {
            throw new Error('Required parameter Size was null or undefined when calling downloadArtifact.');
        }

        if (ArtifactVersion === null || ArtifactVersion === undefined) {
            throw new Error('Required parameter ArtifactVersion was null or undefined when calling downloadArtifact.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/octet-stream'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/Artifact/Media/${encodeURIComponent(String(IDObservationArtifact))}/${encodeURIComponent(String(ArtifactVersion))}/${encodeURIComponent(String(Size))}`,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Get Artifact records for media types that don&#39;t have the Sync flag set
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getArtifactSyncList(observe?: 'body', reportProgress?: boolean): Observable<Array<Artifact>>;
    public getArtifactSyncList(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Artifact>>>;
    public getArtifactSyncList(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Artifact>>>;
    public getArtifactSyncList(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Artifact>>(`${this.basePath}/Artifact/Media/GetSyncList`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postReadCountQuery(body: QueryRequest, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse200>;
    public postReadCountQuery(body: QueryRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse200>>;
    public postReadCountQuery(body: QueryRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse200>>;
    public postReadCountQuery(body: QueryRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postReadCountQuery.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<InlineResponse200>(`${this.basePath}/Artifact/query/count`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postReadQuery(body: QueryRequest, observe?: 'body', reportProgress?: boolean): Observable<Array<ArtifactModel>>;
    public postReadQuery(body: QueryRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ArtifactModel>>>;
    public postReadQuery(body: QueryRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ArtifactModel>>>;
    public postReadQuery(body: QueryRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postReadQuery.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Array<ArtifactModel>>(`${this.basePath}/Artifact/query/read`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public postReadsLiteQuery(body: QueryRequest, observe?: 'body', reportProgress?: boolean): Observable<Array<ArtifactModel>>;
    public postReadsLiteQuery(body: QueryRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ArtifactModel>>>;
    public postReadsLiteQuery(body: QueryRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ArtifactModel>>>;
    public postReadsLiteQuery(body: QueryRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling postReadsLiteQuery.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Array<ArtifactModel>>(`${this.basePath}/Artifact/query/readsLite`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Meadow READ
     * @param id ID of record
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public read(id: number, observe?: 'body', reportProgress?: boolean): Observable<ArtifactModel>;
    public read(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ArtifactModel>>;
    public read(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ArtifactModel>>;
    public read(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling read.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<ArtifactModel>(`${this.basePath}/Artifact/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Meadow READ list
     * @param begin Beginning (skip) number of records (to page)
     * @param max Maximum number of records to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public reads(begin: number, max: number, observe?: 'body', reportProgress?: boolean): Observable<Array<ArtifactModel>>;
    public reads(begin: number, max: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ArtifactModel>>>;
    public reads(begin: number, max: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ArtifactModel>>>;
    public reads(begin: number, max: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (begin === null || begin === undefined) {
            throw new Error('Required parameter begin was null or undefined when calling reads.');
        }

        if (max === null || max === undefined) {
            throw new Error('Required parameter max was null or undefined when calling reads.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<ArtifactModel>>(`${this.basePath}/Artifacts/${encodeURIComponent(String(begin))}/${encodeURIComponent(String(max))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Meadow READ by field value
     * @param field field name
     * @param begin Beginning (skip) number of records (to page)
     * @param max Maximum number of records to return
     * @param value WHERE field value
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public readsByValue(field: string, begin: number, max: number, value: string, observe?: 'body', reportProgress?: boolean): Observable<Array<ArtifactModel>>;
    public readsByValue(field: string, begin: number, max: number, value: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ArtifactModel>>>;
    public readsByValue(field: string, begin: number, max: number, value: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ArtifactModel>>>;
    public readsByValue(field: string, begin: number, max: number, value: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (field === null || field === undefined) {
            throw new Error('Required parameter field was null or undefined when calling readsByValue.');
        }

        if (begin === null || begin === undefined) {
            throw new Error('Required parameter begin was null or undefined when calling readsByValue.');
        }

        if (max === null || max === undefined) {
            throw new Error('Required parameter max was null or undefined when calling readsByValue.');
        }

        if (value === null || value === undefined) {
            throw new Error('Required parameter value was null or undefined when calling readsByValue.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<ArtifactModel>>(`${this.basePath}/Artifacts/By/${encodeURIComponent(String(field))}/${encodeURIComponent(String(value))}/${encodeURIComponent(String(begin))}/${encodeURIComponent(String(max))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Meadow READ filtered list
     * @param filter FBV meadow filter
     * @param begin Beginning (skip) number of records (to page)
     * @param max Maximum number of records to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public readsFiltered(filter: string, begin: number, max: number, observe?: 'body', reportProgress?: boolean): Observable<Array<ArtifactModel>>;
    public readsFiltered(filter: string, begin: number, max: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ArtifactModel>>>;
    public readsFiltered(filter: string, begin: number, max: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ArtifactModel>>>;
    public readsFiltered(filter: string, begin: number, max: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling readsFiltered.');
        }

        if (begin === null || begin === undefined) {
            throw new Error('Required parameter begin was null or undefined when calling readsFiltered.');
        }

        if (max === null || max === undefined) {
            throw new Error('Required parameter max was null or undefined when calling readsFiltered.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<ArtifactModel>>(`${this.basePath}/Artifacts/FilteredTo/${encodeURIComponent(String(filter))}/${encodeURIComponent(String(begin))}/${encodeURIComponent(String(max))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Meadow PUT (Update)
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public update(body: ArtifactModel, observe?: 'body', reportProgress?: boolean): Observable<ArtifactModel>;
    public update(body: ArtifactModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ArtifactModel>>;
    public update(body: ArtifactModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ArtifactModel>>;
    public update(body: ArtifactModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling update.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<ArtifactModel>(`${this.basePath}/Artifact`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * Upload Artifact media file to Headlight
     * @param IDObservationArtifact ID of record
     * @param file 
     * @param ArtifactVersion 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public uploadArtifact(IDObservationArtifact: number, file: Blob, ArtifactVersion: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public uploadArtifact(IDObservationArtifact: number, file: Blob, ArtifactVersion: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public uploadArtifact(IDObservationArtifact: number, file: Blob, ArtifactVersion: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public uploadArtifact(IDObservationArtifact: number, file: Blob, ArtifactVersion: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (IDObservationArtifact === null || IDObservationArtifact === undefined) {
            throw new Error('Required parameter IDObservationArtifact was null or undefined when calling uploadArtifact.');
        }

        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling uploadArtifact.');
        }

        if (ArtifactVersion === null || ArtifactVersion === undefined) {
            throw new Error('Required parameter ArtifactVersion was null or undefined when calling uploadArtifact.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) || formParams;
        }

        return this.httpClient.post<any>(`${this.basePath}/Artifact/Media/${encodeURIComponent(String(IDObservationArtifact))}/${encodeURIComponent(String(ArtifactVersion))}`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
