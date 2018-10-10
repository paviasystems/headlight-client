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
import { Notification } from '../model/notification';
import { QueryRequest } from '../model/queryRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class NotificationService {

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

        return this.httpClient.delete<boolean>(`${this.basePath}/Notification/${encodeURIComponent(String(id))}`,
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

        return this.httpClient.get<InlineResponse200>(`${this.basePath}/Notifications/Count`,
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

        return this.httpClient.get<InlineResponse200>(`${this.basePath}/Notifications/FilteredTo/${encodeURIComponent(String(filter))}/Count`,
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
    public create(body: Notification, observe?: 'body', reportProgress?: boolean): Observable<Notification>;
    public create(body: Notification, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Notification>>;
    public create(body: Notification, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Notification>>;
    public create(body: Notification, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
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

        return this.httpClient.post<Notification>(`${this.basePath}/Notification`,
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

        return this.httpClient.post<InlineResponse200>(`${this.basePath}/Notification/query/count`,
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
    public postReadQuery(body: QueryRequest, observe?: 'body', reportProgress?: boolean): Observable<Array<Notification>>;
    public postReadQuery(body: QueryRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Notification>>>;
    public postReadQuery(body: QueryRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Notification>>>;
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

        return this.httpClient.post<Array<Notification>>(`${this.basePath}/Notification/query/read`,
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
    public read(id: number, observe?: 'body', reportProgress?: boolean): Observable<Notification>;
    public read(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Notification>>;
    public read(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Notification>>;
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

        return this.httpClient.get<Notification>(`${this.basePath}/Notification/${encodeURIComponent(String(id))}`,
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
    public reads(begin: number, max: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Notification>>;
    public reads(begin: number, max: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Notification>>>;
    public reads(begin: number, max: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Notification>>>;
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

        return this.httpClient.get<Array<Notification>>(`${this.basePath}/Notifications/${encodeURIComponent(String(begin))}/${encodeURIComponent(String(max))}`,
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
    public readsFiltered(filter: string, begin: number, max: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Notification>>;
    public readsFiltered(filter: string, begin: number, max: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Notification>>>;
    public readsFiltered(filter: string, begin: number, max: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Notification>>>;
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

        return this.httpClient.get<Array<Notification>>(`${this.basePath}/Notifications/FilteredTo/${encodeURIComponent(String(filter))}/${encodeURIComponent(String(begin))}/${encodeURIComponent(String(max))}`,
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
    public update(body: Notification, observe?: 'body', reportProgress?: boolean): Observable<Notification>;
    public update(body: Notification, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Notification>>;
    public update(body: Notification, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Notification>>;
    public update(body: Notification, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
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

        return this.httpClient.put<Notification>(`${this.basePath}/Notification`,
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
