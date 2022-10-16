import React, { memo } from "react";
import { TagMe } from "../../elements/TagMe";
import { DeleteIcon, EditIcon } from "../../icons";
import { ButtonIcon } from "../../elements";
import { MemberListItemProps } from "./MemberListItemProps";

export const MembersListItem = memo((props: MemberListItemProps) => {
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
    <div className="w-100 flex justify-between pb-1 border-b border-light-2 dark:border-black-3">
      <div className="flex items-center">
        <div>
          <span className="mr-2 dark:bg-dark-0 bg-light-4 focus:outline-none w-full">
            {memberName}
          </span>
        </div>
        {isMe && <TagMe />}
      </div>
      <div className="flex">
        <ButtonIcon
          className="dark:text-dark-2 text-dark-4"
          icon={<EditIcon size={24} />}
          onClick={() => onEditHandler(memberName, memberUid)}
        />
        <ButtonIcon
          disabled={isMe}
          className="dark:text-dark-2 text-dark-4"
          icon={<DeleteIcon size={24} />}
          onClick={() => onDeleteHandler(memberName, memberUid)}
        />
      </div>
    </div>
  );
});
