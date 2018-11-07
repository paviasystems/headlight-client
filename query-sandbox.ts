/**
* Sandbox script for quickly developing queries and API client code snippets.
* 1. Checkout https://github.com/paviasystems/headlight-client.git
* 2. npm install
* 3. Open this file in Visual Studio Code
* 4. Run task 'Launch Sandbox'
*
* @license Pavia Systems, All Rights Reserved
*
* @author Jason Hillier <jason.hillier@paviasystems.com>
*/

import * as Headlight from './node/';
const process = require('process');

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0; //allow self-signed certs for local testing

const _ServerURL = 'https://headlight.local/1.0';
const _UserName = process.env['DEV_USER'] || 'user';
const _Password = process.env['DEV_PASSWORD'] || 'password123';

async function main()
{
    const client = new Headlight.Client(_ServerURL);
    let session = await client.login(_UserName, _Password);

    if (!session.LoggedIn)
    {
        console.error('Login failure!');
        return;
    }

    console.log(`Logged in as userid ${session.UserID}`);
    let testInstanceQuery = client.Repository(Headlight.API.TestInstanceApi, Headlight.API.TestInstance).query(client);

    //get the TestInstances for all Samples in a project.
    //prepare query seperate from request so we can log it.
    testInstanceQuery
        .selectOn(Headlight.API.Sample, 'IDLab', 'IDParentLab')
        .selectOn(Headlight.API.Sample, 'IDSample')
        .joinOn(Headlight.API.TestInstanceSampleJoin, 'IDTestInstance', 'IDTestInstance')
        .join('Sample', 'Sample.IDSample', 'TestInstanceSampleJoin.IDSample')
        .whereOn(Headlight.API.Sample, 'IDProject', 1807)
        .cap(5);

    console.log('==================>\n');
    console.log(testInstanceQuery.packageQuery());
    console.log('\n<===============');
    
    //request records from server.
    let testInstanceRecords = await testInstanceQuery.reads();

    console.log(`Downloaded ${testInstanceRecords.length} records.`);
    console.log(testInstanceRecords);
}

main();
