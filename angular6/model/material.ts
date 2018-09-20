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


/**
 * 
 */
export interface Material { 
    /**
     * 
     */
    IDMaterial: number;
    /**
     * 
     */
    GUIDMaterial: string;
    /**
     * 
     */
    CreateDate: Date;
    /**
     * 
     */
    CreatingIDUser: number;
    /**
     * 
     */
    UpdateDate: Date;
    /**
     * 
     */
    UpdatingIDUser: number;
    /**
     * 
     */
    Deleted: number;
    /**
     * 
     */
    DeleteDate: Date;
    /**
     * 
     */
    DeletingIDUser: number;
    /**
     * 
     */
    ExternalSyncDate: Date;
    /**
     * 
     */
    IDCustomer: number;
    /**
     * 
     */
    Name: string;
    /**
     * 
     */
    NameAbbreviated: string;
    /**
     * 
     */
    Type: string;
    /**
     * 
     */
    Description: string;
    /**
     * 
     */
    CatalogCode: string;
    /**
     * 
     */
    UnitsMetric: string;
    /**
     * 
     */
    UnitsImperial: string;
    /**
     * 
     */
    Active: number;
    /**
     * 
     */
    BrandNameRequired: number;
}
