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

describe('Node API test', () => {
    var client = new Headlight.Client(_ServerURL);

    it('can get API', ()=>{
        let bidItemApi = client.API(Headlight.API.BidItemApi);
    });
    
    it('authenticate', async() => {
        let session = await client.login(_UserName, _Password);

        expect(session).to.have.property('SessionID');
    });

    it('can perform API request which requires authentication', async() => {
        let userApi = client.API(Headlight.API.UserApi);
        let record = await userApi.read(client.UserSession.UserID);

        (<any>userApi)._cacheFlag = true; //used for later test

        expect(record.IDUser).to.eq(client.UserSession.UserID);
    });

    it('will load API from cache', async() => {
        let userApi = client.API(Headlight.API.UserApi);

        expect(userApi).has.property('_cacheFlag');
    });

    it('can download media files', async() => {
        let observations = client.API(Headlight.API.ObservationApi);

        let image = await observations.downloadObservationImage('Thumbnail', 12);
        expect(image instanceof Buffer).to.eq(true);

        let lastResponse = observations.getLastResponse();
        expect(lastResponse.headers['content-type']).to.eq('image/jpeg');

        //fs.writeFileSync('junk.png', image);
    });

    it('can update a record', async() => {
        let userApi = client.API(Headlight.API.UserApi);

        let record = await userApi.read(client.UserSession.UserID);
        let testTime = new Date().getTime();
        
        record.Settings['apiTest'] = testTime;
        let updatedRecord = await userApi.update(record);

        expect(updatedRecord.Settings['apiTest']).to.eq(testTime);
        expect(updatedRecord.UpdateDate).to.be.gt(record.UpdateDate);
    });
});
