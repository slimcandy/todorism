import { IEvent, IEventFromBE } from "../../interfaces";
import { convertDateToISO8601 } from "../date";

export const convertIEventFromBEToIEvent = (event: IEventFromBE): IEvent => ({
  ...event,
  eventUid: event.trip_uid,
  isNewEvent: false,
});

export const convertIEventToIEventFromBE = (event: IEvent): IEventFromBE => ({
  ...event,
  trip_uid: event.eventUid,
  start: convertDateToISO8601(event.start || ""),
  end: convertDateToISO8601(event.end || ""),
});
