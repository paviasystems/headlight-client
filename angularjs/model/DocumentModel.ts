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
export interface DocumentModel {
    /**
     * 
     */
    "Observations": Array<number>;
    /**
     * 
     */
    "Comments": Array<number>;
    /**
     * 
     */
    "ElectronicSignatures": Array<models.ElectronicSignature>;
    /**
     * 
     */
    "FormData": any;
    /**
     * 
     */
    "IDDocument": number;
    /**
     * 
     */
    "GUIDDocument": string;
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
    "Name": string;
    /**
     * 
     */
    "DocumentType": string;
    /**
     * 
     */
    "DocumentDate": Date;
    /**
     * 
     */
    "Status": string;
    /**
     * 
     */
    "Version": number;
    /**
     * 
     */
    "IDProject": number;
    /**
     * 
     */
    "Description": string;
    /**
     * 
     */
    "IDDevice": number;
    /**
     * 
     */
    "AppHash": string;
    /**
     * 
     */
    "Timezone": string;
    /**
     * 
     */
    "Shift": string;
    /**
     * 
     */
    "StateName": string;
    /**
     * 
     */
    "StateStep": number;
    /**
     * 
     */
    "Locked": number;
    /**
     * 
     */
    "ExternalSyncDate": Date;
    /**
     * 
     */
    "SequenceNumber": number;
    /**
     * 
     */
    "ExternalSyncGUID": string;
}

