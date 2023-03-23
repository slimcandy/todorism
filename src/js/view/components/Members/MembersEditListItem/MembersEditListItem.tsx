import React, { memo } from "react";
import { DeleteIcon, EditIcon } from "../../../icons";
import { BtnIcon, MembersListItem, TagMe } from "../../../elements";
import { MemberEditListItemProps } from "./MemberEditListItemProps";

export const MembersEditListItem = memo((props: MemberEditListItemProps) => {
  const {
    memberName,
    memberUid,
    isMe,
    onEdit,
    onDelete,
    onFinishEdit,
    onFocusInput,
  } = props;

  const onEditHandler = (name: string, uid: string) => {
    onEdit({ name, member_uid: uid });
    onFinishEdit(true);
    onFocusInput(true);
  };

  const onDeleteHandler = (name: string, uid: string) => {
    onDelete({ name, member_uid: uid });
  };

  return (
    <MembersListItem name={memberName}>
      <div className="flex grow justify-between items-center w-auto ml-2">
        {isMe && <TagMe />}

        <div className="flex grow justify-end gap-x-2">
          <BtnIcon
            className="dark:text-dark-2 text-dark-4 btn-sm"
            icon={<EditIcon size={24} />}
            onClick={() => onEditHandler(memberName, memberUid)}
          />
          <BtnIcon
            disabled={isMe}
            className="dark:text-dark-2 text-dark-4 btn-sm"
            icon={<DeleteIcon size={24} />}
            onClick={() => onDeleteHandler(memberName, memberUid)}
          />
        </div>
      </div>
    </MembersListItem>
  );
});
