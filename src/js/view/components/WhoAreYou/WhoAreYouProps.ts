import { IEvent, IMember } from "../../../interfaces";

export interface IWhoAreYouProps {
  members: IMember[];
  event: IEvent;
  isWelcomePage: boolean;
  onChangeMember: (member: IMember) => void;
}
