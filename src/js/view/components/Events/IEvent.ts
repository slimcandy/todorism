export interface IEvent {
  trip_uid: string;
  title: string;
  description?: string;
  start?: string | undefined;
  end?: string | undefined;
}
