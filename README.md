# headlight-client

The headlight-client library is an SDK for interacting with [Headlight](http://headlightiq.com/)

It contains the following resources:

|||
|-------------------------------|-------------|
| HTML API Documentation        |  /docs      |
| NodeJS Typescript Client      |  /node      |
| AngularJS Typescript Client   |  /angularjs |
| Angular6 Typescript Client    |  /angular6  |
| Unit tests                    |  /node/test |

### Getting Started

Setup your project for [typescript](https://www.npmjs.com/package/typescript).

Then install this package:
> npm install headlight-client

Create an example.ts script file:
```
import * as Headlight from 'headlight-client';

const _ServerURL = 'https://headlightqa.paviasystems.com';
const _UserName = 'user';
const _Password = 'password123';

async function main()
{
    var client = new Headlight.Client(_ServerURL);
    let session = await client.login(_UserName, _Password);

    let userApi = client.API(Headlight.API.UserApi);
    let record = await userApi.read(client.UserSession.UserID);

    console.log(`My name is ${record.NameFirst} ${record.NameLast}`);
}

main();

```

Execute your script with:
> ts-node example.ts
