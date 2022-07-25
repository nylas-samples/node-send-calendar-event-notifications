# node-starter-repo

This sample repo will show you how to easily to get started with the Nylas Node.js SDK.

## Setup

### System dependencies

- Node.js v16.x

### Gather environment variables

You'll need the following values:

```text
ACCESS_TOKEN = ""
CLIENT_ID = ""
CLIENT_SECRET = ""
```

Add the above values to a `.env` file:

### Install dependencies

```bash
$ npm i
```

## Usage

Run the script using following commands:

```bash
$ npm run build
$ node build/index.js
```

When you run the script, you'll get account information output in your terminal:

```bash
{
    ...
    id: '<ACCOUNT_ID>',
    accountId: '<ACCOUNT_ID>',
    object: 'account',
    name: '<ACCOUNT_NAME>',
    emailAddress: '<ACCOUNT_EMAIL>',
    provider: '<EMAIL_PROVIDER>',
    organizationUnit: 'label',
    syncState: 'running',
    linkedAt: 2022-04-21T14:48:14.000Z,
    accessToken: ''
  }
}
```

## Learn more

Visit our [Nylas Node.js SDK documentation](https://developer.nylas.com/docs/developer-tools/sdk/node-sdk/) to learn more.