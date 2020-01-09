'use strict'

import 'mocha';
import * as fs from 'fs';
import * as process from 'process';
import * as chai from 'chai';
import * as Headlight from '../';

const expect = chai.expect;
//const jsonata = require('jsonata');

const _ServerURL = 'https://headlightqa.paviasystems.com/1.0';
const _UserName = process.env['DEV_USER'] || 'user';
const _Password = process.env['DEV_PASSWORD'] || 'password123';

describe('Node API test', function() {
    this.timeout(10000); //give network requests more time for build slaves

    var client = new Headlight.Client(_ServerURL);
    var pSpreadSheetObservationID = 0;

    it('can get API', ()=>{
        const bidItemApi = client.API(Headlight.API.BidItemApi);
        expect(bidItemApi).to.not.be.null;
    });
    
    it('authenticate', async() => {
        let session = await client.login(_UserName, _Password);

        expect(session).to.have.property('SessionID');
    });

    it('can perform API request which requires authentication', async() => {
        const userApi = client.API(Headlight.API.UserApi);
        let record = await userApi.read(client.UserSession.UserID);

        (<any>userApi)._cacheFlag = true; //used for later test

        expect(record.IDUser).to.eq(client.UserSession.UserID);
    });

    it ('will auto-login if session invalid', async() => {
        const authAPI = client.API(Headlight.API.AuthenticateApi);
        let result = await authAPI.deAuthenticate();
        expect(result).to.have.property('Success');

        //try getting a record after having logged out
        let userApi = client.API(Headlight.API.UserApi);
        let record = await userApi.read(client.UserSession.UserID);
        expect(record.IDUser).to.eq(client.UserSession.UserID);
    }).timeout(35000);

    it('can authenticate using a session token', async() => {
        const authApi = client.API(Headlight.API.AuthenticateApi);
        let token = await authApi.checkoutSessionToken();

        //note: using a temp token means auto-relogin cannot happen
        let session = await client.loginWithToken(token.Token);
        expect(session).to.have.property('SessionID');
    });

    it('will load API from cache', async() => {
        let userApi = client.API(Headlight.API.UserApi);

        expect(userApi).has.property('_cacheFlag');
    });

    it('can download media files', async() => {
        let observations = client.API(Headlight.API.ObservationApi);

        let image = await observations.downloadObservationImage(12, 'Thumbnail');
        expect(image instanceof Buffer).to.eq(true);

        let lastResponse = observations.getLastResponse();
        expect(lastResponse.headers['content-type']).to.eq('image/jpeg');

        //fs.writeFileSync('junk.png', image);
    });

    it('can update a record', async() => {
        const userApi = client.API(Headlight.API.UserApi);

        let record = await userApi.read(client.UserSession.UserID);
        let testTime = new Date().getTime();
        
        record.Settings['apiTest'] = testTime;
        let updatedRecord = await userApi.update(record);

        expect(updatedRecord.Settings['apiTest']).to.eq(testTime);
        expect(updatedRecord.UpdateDate).to.not.eq(record.UpdateDate);
    });

    it ('can access a different API with renewed credentials', async() => {
        const customerApi = client.API(Headlight.API.CustomerApi);
        let customer = await customerApi.read(client.UserSession.CustomerID);

        expect(customer).to.have.property('IDCustomer');
        expect(customer.IDCustomer).to.eq(client.UserSession.CustomerID);
    });

    it ('can access via Repository interface', async() => {
        const userRepo = client.Repository(Headlight.API.UserApi, Headlight.API.UserModel);
        let record = await userRepo.readByID(client.UserSession.UserID, client);
        expect(record.IDUser).to.eq(client.UserSession.UserID);
    });

    it ('can access via fluent-query interface', async() => {
        let userQuery = client.Repository(Headlight.API.UserApi, Headlight.API.UserModel).query(client);

        let customerUsers = await userQuery
            .where("IDCustomer", client.UserSession.CustomerID)
            .cap(5)
            .reads();
        
        expect(customerUsers.length).eq(5);
    });

    it ('can perform a count query', async() => {
        let projectQuery = client.Repository(Headlight.API.ProjectApi, Headlight.API.ProjectModel).query(client);

        //find out how many projects have the word 'project' in their name
        let projectCount = await projectQuery
            .where("Name", "%project%", Operator.Like)
            .count();
        
        expect(projectCount).to.be.gt(1);
    });

    it ('can perform a join query', async() => {
        let samplesQuery = client.Repository(Headlight.API.SampleApi, Headlight.API.Sample).query(client);

        //get the Sample that belongs to a SampleLog
        let sampleRecords = await samplesQuery
            .joinOn(Headlight.API.SampleLog, 'IDSample', 'IDSample', JoinType.INNER)
            .whereOn(Headlight.API.SampleLog, 'IDSampleLog', 595)
            .reads();
        
        expect(sampleRecords.length).to.be.gt(0);
    });

    it ('can perform an HTTP GET', async() => {
        var projects = await client.GET<Headlight.API.ProjectModel[]>("/Projects/0/1");
        expect(projects.length).to.be.gt(0);
        expect(projects[0].IDProject).to.be.gt(0);
    });

    it ('can get a paged records using getAllRecordsPaged() using GET',  async() => {

        var tmpTotalRecords = 0;
        var pProjectManifestRecords = await client.getAllRecordsPaged(`Modules`, {}, 5, (pError, pRecords, fNext) =>
        {  
            tmpTotalRecords += pRecords.length;
            return fNext();
        });

        expect (tmpTotalRecords).to.be.gt(5);
    });

    it ('can get a paged records using getAllRecordsPaged() using POST',  async() => {
        
        var tmpTotalRecords = 0;
        var pObservationsFiltered = await client.getAllRecordsPaged(`ObservationsFilter`, {method: 'POST', body: {IDProject: 1, ObservationType: 'Legacy Equipment'}}, 5, (pError, pRecords, fNext) =>
        {
            tmpTotalRecords += pRecords.length;
            return fNext();
        });

        expect (tmpTotalRecords).to.be.gt(0);
    });

    it('can create a SpreadSheet type observation', async() => {
        let observationsRepo = client.Repository(Headlight.API.ObservationApi, Headlight.API.ObservationModel)
        let pTargetObservation = await observationsRepo.createEmptyEntity();
        
        pTargetObservation.ObservationType = 'Legacy Personnel';   
        pTargetObservation.IDProject = 328;
        pTargetObservation.Name ='Test Personnel Observation';

        let pPersonnelObservation = await client.API(Headlight.API.ObservationApi).create(pTargetObservation);
        pSpreadSheetObservationID = pPersonnelObservation.IDObservation;

        expect(pPersonnelObservation.Name).to.eq( pTargetObservation.Name );
        expect(pPersonnelObservation.ObservationType).to.eq(pTargetObservation.ObservationType)
       
    });

    it ('can get a file buffer using getFileExtended() with GET method', async() =>{
        var pResponse = await client.getFileExtended('Observation/12/Image/Standard', {method:'GET'});
        expect(pResponse[0].headers['content-type']).to.eq('image/jpeg');
    });

    it ('can get a file buffer using getFileExtended() with POST method', async() =>{
        var pResponse = await client.getFileExtended('ObservationsFilter/DownloadSpreadsheet/0/10', {method:'POST', body: {'IDObservation': pSpreadSheetObservationID} });
        expect(pResponse[0].headers['content-type']).to.eq('application/octet-stream');
    });
});

