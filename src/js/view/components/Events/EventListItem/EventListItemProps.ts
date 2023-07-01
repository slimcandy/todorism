import { IEvent } from "../../../../interfaces";

export interface IEventListItemProps extends IEvent {
  onDeleteEvent: (eventUid: string) => void;
}
