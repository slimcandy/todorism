export interface IEventFromBE {
  trip_uid: string;
  title: string;
  description: string;
  start: string | null;
  end: string | null;
}

export interface IEvent extends Omit<IEventFromBE, "trip_uid"> {
  eventUid: string;
  isNewEvent?: boolean;
}
