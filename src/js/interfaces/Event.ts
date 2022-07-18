export interface Event {
  creation_stage: number;
  description?: string;
  end?: Date;
  start?: Date;
  status: number;
  title: string;
  trip_uid: string;
}
