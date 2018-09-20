import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ArtifactService } from './api/artifact.service';
import { AuthenticateService } from './api/authenticate.service';
import { BatchExportService } from './api/batchExport.service';
import { BidItemService } from './api/bidItem.service';
import { CommentService } from './api/comment.service';
import { ContractService } from './api/contract.service';
import { CustomerService } from './api/customer.service';
import { DocumentService } from './api/document.service';
import { DocumentApprovalService } from './api/documentApproval.service';
import { DocumentSendToService } from './api/documentSendTo.service';
import { DocumentsService } from './api/documents.service';
import { DocumentsByObservationService } from './api/documentsByObservation.service';
import { ElectronicSignatureService } from './api/electronicSignature.service';
import { EquipmentService } from './api/equipment.service';
import { LabService } from './api/lab.service';
import { LabMaterialAssignmentService } from './api/labMaterialAssignment.service';
import { LabTestApprovalService } from './api/labTestApproval.service';
import { LabTestDefaultService } from './api/labTestDefault.service';
import { LineItemService } from './api/lineItem.service';
import { MaterialService } from './api/material.service';
import { MaterialLineItemJoinService } from './api/materialLineItemJoin.service';
import { MaterialPayItemJoinService } from './api/materialPayItemJoin.service';
import { MaterialRecordOfMaterialEntryJoinService } from './api/materialRecordOfMaterialEntryJoin.service';
import { MixSpecificationService } from './api/mixSpecification.service';
import { MixSpecificationMaterialJoinService } from './api/mixSpecificationMaterialJoin.service';
import { ModuleService } from './api/module.service';
import { NotificationService } from './api/notification.service';
import { ObservationService } from './api/observation.service';
import { ObservationApprovalService } from './api/observationApproval.service';
import { ObservationCloneTemplatesService } from './api/observationCloneTemplates.service';
import { ObservationSearchsService } from './api/observationSearchs.service';
import { ObservationSendToService } from './api/observationSendTo.service';
import { ObservationsBatchTagService } from './api/observationsBatchTag.service';
import { ObservationsByDocumentService } from './api/observationsByDocument.service';
import { ObservationsByUpdateDateService } from './api/observationsByUpdateDate.service';
import { ObservationsFilterService } from './api/observationsFilter.service';
import { OrganizationService } from './api/organization.service';
import { OrganizationMaterialJoinService } from './api/organizationMaterialJoin.service';
import { PayItemService } from './api/payItem.service';
import { ProductService } from './api/product.service';
import { ProductionPlantService } from './api/productionPlant.service';
import { ProductionPlantMaterialApprovalService } from './api/productionPlantMaterialApproval.service';
import { ProjectService } from './api/project.service';
import { RecordOfMaterialService } from './api/recordOfMaterial.service';
import { RecordOfMaterialEntryService } from './api/recordOfMaterialEntry.service';
import { RecordOfMaterialEntryArchiveService } from './api/recordOfMaterialEntryArchive.service';
import { ReportService } from './api/report.service';
import { ReportNamedInstanceService } from './api/reportNamedInstance.service';
import { SampleService } from './api/sample.service';
import { SampleLabJoinService } from './api/sampleLabJoin.service';
import { SampleLineItemJoinService } from './api/sampleLineItemJoin.service';
import { SampleLogService } from './api/sampleLog.service';
import { TestService } from './api/test.service';
import { TestDataService } from './api/testData.service';
import { TestInstanceService } from './api/testInstance.service';
import { TestInstanceDataService } from './api/testInstanceData.service';
import { TestInstanceDataArchiveService } from './api/testInstanceDataArchive.service';
import { TestInstanceLabJoinService } from './api/testInstanceLabJoin.service';
import { TestInstanceSampleJoinService } from './api/testInstanceSampleJoin.service';
import { TestLabJoinService } from './api/testLabJoin.service';
import { TestPlanService } from './api/testPlan.service';
import { TestRecordOfMaterialEntryJoinService } from './api/testRecordOfMaterialEntryJoin.service';
import { TestSpecificationService } from './api/testSpecification.service';
import { TestSpecificationMaterialTestJoinService } from './api/testSpecificationMaterialTestJoin.service';
import { TestSpecificationRequirementService } from './api/testSpecificationRequirement.service';
import { TestSpecificationSetService } from './api/testSpecificationSet.service';
import { TestSpecificationSetTestJoinService } from './api/testSpecificationSetTestJoin.service';
import { TestStepService } from './api/testStep.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ArtifactService,
    AuthenticateService,
    BatchExportService,
    BidItemService,
    CommentService,
    ContractService,
    CustomerService,
    DocumentService,
    DocumentApprovalService,
    DocumentSendToService,
    DocumentsService,
    DocumentsByObservationService,
    ElectronicSignatureService,
    EquipmentService,
    LabService,
    LabMaterialAssignmentService,
    LabTestApprovalService,
    LabTestDefaultService,
    LineItemService,
    MaterialService,
    MaterialLineItemJoinService,
    MaterialPayItemJoinService,
    MaterialRecordOfMaterialEntryJoinService,
    MixSpecificationService,
    MixSpecificationMaterialJoinService,
    ModuleService,
    NotificationService,
    ObservationService,
    ObservationApprovalService,
    ObservationCloneTemplatesService,
    ObservationSearchsService,
    ObservationSendToService,
    ObservationsBatchTagService,
    ObservationsByDocumentService,
    ObservationsByUpdateDateService,
    ObservationsFilterService,
    OrganizationService,
    OrganizationMaterialJoinService,
    PayItemService,
    ProductService,
    ProductionPlantService,
    ProductionPlantMaterialApprovalService,
    ProjectService,
    RecordOfMaterialService,
    RecordOfMaterialEntryService,
    RecordOfMaterialEntryArchiveService,
    ReportService,
    ReportNamedInstanceService,
    SampleService,
    SampleLabJoinService,
    SampleLineItemJoinService,
    SampleLogService,
    TestService,
    TestDataService,
    TestInstanceService,
    TestInstanceDataService,
    TestInstanceDataArchiveService,
    TestInstanceLabJoinService,
    TestInstanceSampleJoinService,
    TestLabJoinService,
    TestPlanService,
    TestRecordOfMaterialEntryJoinService,
    TestSpecificationService,
    TestSpecificationMaterialTestJoinService,
    TestSpecificationRequirementService,
    TestSpecificationSetService,
    TestSpecificationSetTestJoinService,
    TestStepService,
    UserService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
