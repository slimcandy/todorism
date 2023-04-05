import { IAccessIds, IMember } from "../../../../interfaces";

export interface MembersListProps {
  accessIds: IAccessIds;
  list: Array<IMember>;
  onEdit: (member: IMember) => void;
  onDelete: (member: IMember) => void;
  onFinishEdit: (value: boolean) => void;
  onFocusInput: (value: boolean) => void;
}
