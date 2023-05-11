import { IEventsActionModals } from "../props";
import { IEvent } from "../../../../../../interfaces";

export interface IEventsListActionModal extends IEventsActionModals {
  eventTitle: IEvent["title"];
  onDeleteEvent: () => void;
}
