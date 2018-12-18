/**
* The Headlight API client for NodeJS
*
* @license Pavia Systems, All Rights Reserved
*
* @author Jason Hillier <jason.hillier@paviasystems.com>
*/
import * as API from './api';
import { BaseRepository, SimpleQuery } from 'ts-repository-fluent';
export { API };
export declare type constructor<T> = new () => T;
export interface GeneralAPI {
    setDefaultAuthentication(pAuth: API.Authentication): void;
}
export interface IQueryable<T> extends GeneralAPI {
    postReadQuery(body: any): Promise<Array<T>>;
    postReadCountQuery(body: any): Promise<any>;
}
export declare class Repository<T> extends BaseRepository<T> {
    private _apiClass;
    constructor(_apiClass: IQueryable<T>, ormType: constructor<T>);
    reads(pQuery: SimpleQuery<T>, pRequestContext: any): Promise<Array<T>>;
    readsLite(pQuery: SimpleQuery<T>, pRequestContext: any): Promise<Array<T>>;
    count(pQuery: SimpleQuery<T>, pRequestContext: any): Promise<number>;
}
export declare class CookieAuth implements API.Authentication {
    private sessionId;
    private client;
    private _Username;
    private _Password;
    private _Token;
    constructor(sessionId: string, client: Client);
    setCredentials(pSessionId: string, pUsername: string, pPassword: string): void;
    setToken(pSessionId: string, pSessionToken: string): void;
    applyToRequest(requestOptions: any): void;
    executeWithAuth<T>(requestOptions: any, requestDelegate: () => Promise<T>): Promise<T>;
}
export declare class Client {
    private _BaseURL;
    private _Cookie;
    private _UserSession;
    private _Auth;
    private _ApiReferences;
    constructor(pBaseURL: string);
    readonly UserSession: API.ISession;
    /**
     * Perform login operation, and keep session cookie for use in later API calls.
     */
    login(pUsername: string, pPassword: string): Promise<API.ISession>;
    /**
     * Perform login operation, and keep session cookie for use in later API calls.
     */
    loginWithToken(pSessionToken: string): Promise<API.ISession>;
    /**
     * Get reference to an API, and configure it according to current state of client.
     */
    API<T extends GeneralAPI>(pApiType: new (baseURL: string) => T): T;
    /**
     * Get reference to an API, and configure it according to current state of client.
     */
    Repository<T extends IQueryable<ORM>, ORM>(pApiType: new (baseURL: string) => T, pORMType: constructor<ORM>): Repository<ORM>;
}
