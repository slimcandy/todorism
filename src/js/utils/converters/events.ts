import { IEvent, IEventFromBE } from "../../interfaces";

export const convertIEventFromBEToIEvent = (event: IEventFromBE): IEvent => ({
  ...event,
  tripUid: event.trip_uid,
});
