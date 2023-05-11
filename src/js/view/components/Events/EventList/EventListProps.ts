import { IEvent } from "../../../../interfaces";

export interface IEventListProps {
  list: Array<IEvent>;
  onClick: (value: string) => void;
  onDeleteEvent: (eventUid: string) => void;
}
