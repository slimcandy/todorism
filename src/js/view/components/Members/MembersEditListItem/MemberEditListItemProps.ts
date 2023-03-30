export interface MemberEditListItemProps {
  memberName: string;
  memberUid: string;
  isMe: boolean;
  onEdit: (member: { name: string; member_uid: string }) => void;
  onDelete: (member: { name: string; member_uid: string }) => void;
  onFinishEdit: (value: boolean) => void;
  onFocusInput: (value: boolean) => void;
}
