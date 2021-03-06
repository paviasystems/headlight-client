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
export interface Notification {
    /**
     * 
     */
    "IDNotification": number;
    /**
     * 
     */
    "GUIDNotification": string;
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
    "IDNotificationRule": number;
    /**
     * 
     */
    "RecipientIDUser": number;
    /**
     * 
     */
    "NotificationMessage": string;
    /**
     * 
     */
    "Unread": number;
    /**
     * 
     */
    "NotificationType": string;
}

