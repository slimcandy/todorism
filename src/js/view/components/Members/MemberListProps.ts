import { IMember } from "../../../interfaces";

export interface MembersListProps {
  list: Array<IMember>;
  onEdit: (member: IMember) => void;
  onDelete: (member: IMember) => void;
  onFinishEdit: (value: boolean) => void;
  onFocusInput: (value: boolean) => void;
}