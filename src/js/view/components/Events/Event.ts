export interface Event {
  title: string;
  description: string;
  start: string;
  end: string;
  trip_uid: string;
  status?: number;
  creation_stage?: number;
}
export interface EventListItemProps {
  tripUid: string;
  key?: string;
  title: string;
  description: string;
  dateStart: string;
  dateEnd: string;
}
