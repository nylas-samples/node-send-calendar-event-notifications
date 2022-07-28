"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import your dependencies
require("dotenv/config");
const nylas_1 = __importDefault(require("nylas"));
const event_1 = __importDefault(require("nylas/lib/models/event"));
// Configure your Nylas client
nylas_1.default.config({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
});
const nylas = nylas_1.default.with(process.env.ACCESS_TOKEN);
// Provide a starts and end time for the event as unix timestamps
const THIRTY_MINUTES = 30 * 60;
const START_TIME = Date.now() / 1000 + THIRTY_MINUTES;
const END_TIME = START_TIME + THIRTY_MINUTES;
// Provide the calendar id you want to add an event to
const CALENDAR_ID = '<CALENDAR_ID>';
// Provide participant details
const PARTICIPANT_EMAIL = '<PARTICIPANT_EMAIL>';
const PARTICIPANT_NAME = '<PARTICIPANT_NAME>';
const PARTICIPANT_PHONE_NUMBER = '<PARTICIPANT_PHONE_NUMBER>';
// Create an event
const createCalendarEvent = async function () {
    try {
        const event = new event_1.default(nylas, {
            calendarId: CALENDAR_ID,
            title: 'Build Apps with Nylas Node SDK',
            when: {
                startTime: START_TIME,
                endTime: END_TIME,
            },
            participants: [
                {
                    name: PARTICIPANT_NAME,
                    email: PARTICIPANT_EMAIL,
                    phoneNumber: PARTICIPANT_PHONE_NUMBER,
                }
            ],
            notifications: [],
        });
        const { id, calendarId, title, notifications } = await event.save();
        console.log({ id, calendarId, title, notifications });
    }
    catch (error) {
        console.error("Error:\n", error);
    }
};
exports.default = createCalendarEvent;
