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

import * as models from './models';

/**
 * 
 */
export interface ORMLabTestApproval {
    /**
     * 
     */
    "IDLabTestJoin": number;
    /**
     * 
     */
    "GUIDLabTestJoin": string;
    /**
     * 
     */
    "CreateDate": Date;
    /**
     * 
     */
    "CreatingIDUser": number;
    /**
     * 
     */
    "UpdateDate": Date;
    /**
     * 
     */
    "UpdatingIDUser": number;
    /**
     * 
     */
    "Deleted": number;
    /**
     * 
     */
    "DeleteDate": Date;
    /**
     * 
     */
    "DeletingIDUser": number;
    /**
     * 
     */
    "ExternalSyncDate": Date;
    /**
     * 
     */
    "IDCustomer": number;
    /**
     * 
     */
    "IDLab": number;
    /**
     * 
     */
    "IDTest": number;
    /**
     * 
     */
    "DateStart": Date;
    /**
     * 
     */
    "DateEnd": Date;
    /**
     * 
     */
    "Notes": string;
}
