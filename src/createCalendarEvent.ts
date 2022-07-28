// Import your dependencies
import 'dotenv/config';
import Nylas from "nylas"
import Event from "nylas/lib/models/event";

// Configure your Nylas client
Nylas.config({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const nylas = Nylas.with(process.env.ACCESS_TOKEN);
// Provide a starts and end time for the event as unix timestamps

const THIRTY_MINUTES = 30*60;
const START_TIME = Date.now()/1000 + THIRTY_MINUTES;
const END_TIME = START_TIME + THIRTY_MINUTES;
// Provide the calendar id you want to add an event to
const CALENDAR_ID = '<CALENDAR_ID>';
// Provide participant details
const PARTICIPANT_EMAIL = '<PARTICIPANT_EMAIL>'
const PARTICIPANT_NAME = '<PARTICIPANT_NAME>'
// TODO: Is this the correct format?
const PARTICIPANT_PHONE_NUMBER = '<PARTICIPANT_PHONE_NUMBER>'

// Create an event
const createCalendarEvent = async function() {
  try {
    const event = new Event(nylas, {
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
  } catch (error) {
    console.error("Error:\n", error);
  }
};

export default createCalendarEvent;