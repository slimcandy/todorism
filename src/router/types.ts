import { IAccessIds, IEvent, IMember } from "../js/interfaces";

export interface IProvidedEvent {
  event: IEvent;
  accessIds?: IAccessIds;
}

export interface IProvidedMembers extends IProvidedEvent {
  members: IMember[];
}

export type TEventWelcomePage = { data: Promise<IProvidedMembers> };
export type TProvidedEvent = { data: Promise<IProvidedEvent> };
