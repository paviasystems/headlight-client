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
export interface ORMProductionPlantMaterialApproval { 
    /**
     * 
     */
    IDProductionPlantMaterialApproval: number;
    /**
     * 
     */
    GUIDProductionPlantMaterialApproval: string;
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
    IDMaterial: number;
    /**
     * 
     */
    IDMixSpecification: number;
    /**
     * 
     */
    IDProductionPlant: number;
    /**
     * 
     */
    StartDate: Date;
    /**
     * 
     */
    EndDate: Date;
    /**
     * 
     */
    Notes: string;
}
