"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import your dependencies
require("dotenv/config");
const nylas_1 = __importDefault(require("nylas"));
// Configure your Nylas client
nylas_1.default.config({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});
const nylas = nylas_1.default.with(process.env.ACCESS_TOKEN);
// Provide an event id to add notifications to
const EVENT_ID = '<EVENT_ID>';
const WEBHOOK_URL = '<WEBHOOK_URL>';
const WEBHOOK_PAYLOAD = { text: "Build Apps with Nylas Node SDK starts in one hour!" };
// Add email notification to event
const addSMSNotification = async function () {
    try {
        const event = await nylas.events.find(EVENT_ID);
        const notification = {
            "type": "webhook",
            "minutes_before_event": "25",
            "payload": JSON.stringify(WEBHOOK_PAYLOAD),
            "url": WEBHOOK_URL,
        };
        event.notifications = event.notifications ? [...event.notifications, notification] : [notification];
        event.save();
        console.log({ notifications: event.notifications });
    }
    catch (error) {
        console.error("Error:\n", error);
    }
};
exports.default = addSMSNotification;
