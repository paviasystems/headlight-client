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

import { InlineResponse200 } from '../model/inlineResponse200';
import { QueryRequest } from '../model/queryRequest';
import { ReportModel } from '../model/reportModel';
import { ReportRenderResult } from '../model/reportRenderResult';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ReportService {

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

        return this.httpClient.delete<boolean>(`${this.basePath}/Report/${encodeURIComponent(String(id))}`,
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

        return this.httpClient.get<InlineResponse200>(`${this.basePath}/Reports/Count`,
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

        return this.httpClient.get<InlineResponse200>(`${this.basePath}/Reports/FilteredTo/${encodeURIComponent(String(filter))}/Count`,
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
    public create(body: ReportModel, observe?: 'body', reportProgress?: boolean): Observable<ReportModel>;
    public create(body: ReportModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ReportModel>>;
    public create(body: ReportModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ReportModel>>;
    public create(body: ReportModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.post<ReportModel>(`${this.basePath}/Report`,
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
     * Get list of available render types for a document type. (pdf, html, etc.)
     * @param ReportType Report type name (e.g. &#39;DCR&#39;, &#39;Headlight-Daily&#39;, etc)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDocumentRenderByType(ReportType: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getDocumentRenderByType(ReportType: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getDocumentRenderByType(ReportType: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getDocumentRenderByType(ReportType: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ReportType === null || ReportType === undefined) {
            throw new Error('Required parameter ReportType was null or undefined when calling getDocumentRenderByType.');
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

        return this.httpClient.get<any>(`${this.basePath}/Report/${encodeURIComponent(String(ReportType))}`,
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
     * Request to render a report. To get rendered files, use getReportStageFile() Example HTML flow: 1. Request /Report/Render/1247/default 2. Extract GUIDReportDescription (i.e. \&quot;0x5984be9c8b000000\&quot;) from response object. 3. Open a new browser tab to: /Report/0x5984be9c8b000000/ 4. Rendered html page will subsequently request assets (images, css, etc)
     * @param IDDocument ID of record
     * @param Renderer Render format (default, html, pdf, json, etc)
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRenderReport(IDDocument: number, Renderer: string, observe?: 'body', reportProgress?: boolean): Observable<ReportRenderResult>;
    public getRenderReport(IDDocument: number, Renderer: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ReportRenderResult>>;
    public getRenderReport(IDDocument: number, Renderer: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ReportRenderResult>>;
    public getRenderReport(IDDocument: number, Renderer: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (IDDocument === null || IDDocument === undefined) {
            throw new Error('Required parameter IDDocument was null or undefined when calling getRenderReport.');
        }

        if (Renderer === null || Renderer === undefined) {
            throw new Error('Required parameter Renderer was null or undefined when calling getRenderReport.');
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

        return this.httpClient.get<ReportRenderResult>(`${this.basePath}/Report/Render/${encodeURIComponent(String(IDDocument))}/${encodeURIComponent(String(Renderer))}`,
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
     * Source JSON datum used to generate the report.
     * @param ReportUUID UUID of completed report render.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getReportDatum(ReportUUID: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getReportDatum(ReportUUID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getReportDatum(ReportUUID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getReportDatum(ReportUUID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ReportUUID === null || ReportUUID === undefined) {
            throw new Error('Required parameter ReportUUID was null or undefined when calling getReportDatum.');
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

        return this.httpClient.get<any>(`${this.basePath}/Report/Datum/${encodeURIComponent(String(ReportUUID))}`,
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
     * Manifest (JSON metadata file) about the rendered report. Includes information about other generated assets.
     * @param ReportUUID UUID of completed report render.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getReportManifest(ReportUUID: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getReportManifest(ReportUUID: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getReportManifest(ReportUUID: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getReportManifest(ReportUUID: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ReportUUID === null || ReportUUID === undefined) {
            throw new Error('Required parameter ReportUUID was null or undefined when calling getReportManifest.');
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

        return this.httpClient.get<any>(`${this.basePath}/Report/Manifest/${encodeURIComponent(String(ReportUUID))}`,
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
     * Get staged (rendered) file for a previously rendered report.
     * @param ReportUUID UUID of completed report render.
     * @param StageFilePath Subpath to file in rendered report stage dir
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getReportStageFile(ReportUUID: string, StageFilePath: string, observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    public getReportStageFile(ReportUUID: string, StageFilePath: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    public getReportStageFile(ReportUUID: string, StageFilePath: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
    public getReportStageFile(ReportUUID: string, StageFilePath: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (ReportUUID === null || ReportUUID === undefined) {
            throw new Error('Required parameter ReportUUID was null or undefined when calling getReportStageFile.');
        }

        if (StageFilePath === null || StageFilePath === undefined) {
            throw new Error('Required parameter StageFilePath was null or undefined when calling getReportStageFile.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/octet-stream',
            'application/pdf',
            'text/html'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/Report/${encodeURIComponent(String(ReportUUID))}/${encodeURIComponent(String(StageFilePath))}`,
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

        return this.httpClient.post<InlineResponse200>(`${this.basePath}/Report/query/count`,
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
    public postReadQuery(body: QueryRequest, observe?: 'body', reportProgress?: boolean): Observable<Array<ReportModel>>;
    public postReadQuery(body: QueryRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ReportModel>>>;
    public postReadQuery(body: QueryRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ReportModel>>>;
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

        return this.httpClient.post<Array<ReportModel>>(`${this.basePath}/Report/query/read`,
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
    public postReadsLiteQuery(body: QueryRequest, observe?: 'body', reportProgress?: boolean): Observable<Array<ReportModel>>;
    public postReadsLiteQuery(body: QueryRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ReportModel>>>;
    public postReadsLiteQuery(body: QueryRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ReportModel>>>;
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

        return this.httpClient.post<Array<ReportModel>>(`${this.basePath}/Report/query/readsLite`,
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
    public read(id: number, observe?: 'body', reportProgress?: boolean): Observable<ReportModel>;
    public read(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ReportModel>>;
    public read(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ReportModel>>;
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

        return this.httpClient.get<ReportModel>(`${this.basePath}/Report/${encodeURIComponent(String(id))}`,
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
    public reads(begin: number, max: number, observe?: 'body', reportProgress?: boolean): Observable<Array<ReportModel>>;
    public reads(begin: number, max: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ReportModel>>>;
    public reads(begin: number, max: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ReportModel>>>;
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

        return this.httpClient.get<Array<ReportModel>>(`${this.basePath}/Reports/${encodeURIComponent(String(begin))}/${encodeURIComponent(String(max))}`,
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
    public readsByValue(field: string, begin: number, max: number, value: string, observe?: 'body', reportProgress?: boolean): Observable<Array<ReportModel>>;
    public readsByValue(field: string, begin: number, max: number, value: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ReportModel>>>;
    public readsByValue(field: string, begin: number, max: number, value: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ReportModel>>>;
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

        return this.httpClient.get<Array<ReportModel>>(`${this.basePath}/Reports/By/${encodeURIComponent(String(field))}/${encodeURIComponent(String(value))}/${encodeURIComponent(String(begin))}/${encodeURIComponent(String(max))}`,
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
    public readsFiltered(filter: string, begin: number, max: number, observe?: 'body', reportProgress?: boolean): Observable<Array<ReportModel>>;
    public readsFiltered(filter: string, begin: number, max: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ReportModel>>>;
    public readsFiltered(filter: string, begin: number, max: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ReportModel>>>;
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

        return this.httpClient.get<Array<ReportModel>>(`${this.basePath}/Reports/FilteredTo/${encodeURIComponent(String(filter))}/${encodeURIComponent(String(begin))}/${encodeURIComponent(String(max))}`,
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
    public update(body: ReportModel, observe?: 'body', reportProgress?: boolean): Observable<ReportModel>;
    public update(body: ReportModel, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ReportModel>>;
    public update(body: ReportModel, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ReportModel>>;
    public update(body: ReportModel, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.put<ReportModel>(`${this.basePath}/Report`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
