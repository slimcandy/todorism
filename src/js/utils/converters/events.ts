import { IEvent, IEventFromBE } from "../../interfaces";

export const convertIEventFromBEToIEvent = (event: IEventFromBE): IEvent => ({
  ...event,
  eventUid: event.trip_uid,
  isNewEvent: false,
});

export const convertIEventToIEventFromBE = (event: IEvent): IEventFromBE => ({
  ...event,
  trip_uid: event.eventUid,
});
