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

import { Observable }                                        from 'rxjs/Observable';

import { InlineResponse200 } from '../model/inlineResponse200';
import { ReportModel } from '../model/reportModel';

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
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getDocumentRenderByType(observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getDocumentRenderByType(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getDocumentRenderByType(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getDocumentRenderByType(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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
     * Meadow READ filtered list
     * @param begin Beginning (skip) number of records (to page)
     * @param max Maximum number of records to return
     * @param filter FBV meadow filter
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public readsFiltered(begin: number, max: number, filter: string, observe?: 'body', reportProgress?: boolean): Observable<Array<ReportModel>>;
    public readsFiltered(begin: number, max: number, filter: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ReportModel>>>;
    public readsFiltered(begin: number, max: number, filter: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ReportModel>>>;
    public readsFiltered(begin: number, max: number, filter: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (begin === null || begin === undefined) {
            throw new Error('Required parameter begin was null or undefined when calling readsFiltered.');
        }
        if (max === null || max === undefined) {
            throw new Error('Required parameter max was null or undefined when calling readsFiltered.');
        }
        if (filter === null || filter === undefined) {
            throw new Error('Required parameter filter was null or undefined when calling readsFiltered.');
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
