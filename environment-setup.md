## Environment Setup

Let’s check that our environment is set up to use the [Nylas Node SDK](https://github.com/nylas/nylas-nodejs). Check the Node version in your terminal:

```bash
$ node -v
v18.0.0
```

If you don’t see a version returned, you may not have Node installed. Try the following steps:

1. Visit [nodejs.org](https://nodejs.org/en/) to set up Node on your machine
2. *Recommended*: If you happen to use or require multiple versions of Node, consider using [nvm](https://github.com/nvm-sh/nvm)

The minimum required Node version is `v16.0.0`. As a quick check, try running `node -v` again to confirm the version. You may need to restart your terminal for the changes to take effect.


## Project Setup

Let’s start a new project to build from. Skip the next step (starting from scratch) if you are adding Nylas to an existing codebase.

### Starting from scratch

Begin by creating and moving into a new directory, then initializing a new `npm` project with a default `package.json`: 

```bash
$ mkdir amazing-app
$ cd amazing-app
$ npm init –yes
```

### Install the Nylas Node SDK

After creating a repository, install the Nylas Node SDK:

```bash
$ npm install nylas
```

Now we have Nylas installed and are ready to build.


## Environment Variables

Install `dotenv` to manage environment variables. Let’s install `dotenv` and create a `.env` file to store environment variables:

```text
$ npm install dotenv
$ touch .env
```

You'll need the following values to use the Nylas Node SDK:

```text
ACCESS_TOKEN = ""
CLIENT_ID = ""
CLIENT_SECRET = ""
```

Add the above values to a `.env` file. We can get the `CLIENT_ID` and `CLIENT_SECRET` from the App Settings.

Never share the contents of the `.env` publicly or place the contents on a remote git repository like Github for others to access.
