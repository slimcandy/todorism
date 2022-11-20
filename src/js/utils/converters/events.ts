import { IEvent, IEventFromBE } from "../../interfaces";

export const convertIEventFromBEToIEvent = (event: IEventFromBE): IEvent => ({
  ...event,
  eventUid: event.trip_uid,
});
