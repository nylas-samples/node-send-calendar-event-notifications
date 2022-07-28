# node-send-calendar-event-notifications

This sample repo will show you how to easily send calendar event notifications with the Nylas Node.js SDK.

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

The index.js consists of functions for different calendar functions:


createCalendarEvent to create a calendar event (you should do this first)
addEmailNotification to add an email notification to the calendar event
addSMSNotification to add a SMS notification to the calendar event
addWebhookNotification to add a webhook notification to the calendar event

By commenting out the function (and import), you can run the specific function as follows:

```
  import createCalendarEvent from './listCalendars';
  \\...commented out imports

  createCalendarEvent();
  \\...commented out function calls
```

Be sure to check if any specific data is required. For example createCalendarEvent.ts requires a few pieces of data like replacing <CALENDAR_ID>.

## Learn more

Visit our [Nylas Node.js SDK documentation](https://developer.nylas.com/docs/developer-tools/sdk/node-sdk/) to learn more.