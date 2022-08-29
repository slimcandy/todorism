import React, { memo } from "react";
import { TagMe } from "../../elements/TagMe";
import { DeleteIcon, EditIcon } from "../../icons";
import { ButtonIcon } from "../../elements";

type Props = {
  memberName: string;
  memberUid: string;
  isMe: boolean;
  onEdit: (member: { name: string; member_uid: string }) => void;
  onDelete: (member: { name: string; member_uid: string }) => void;
  onEditClick: (value: boolean) => void;
};

export const MembersListItem = memo((props: Props) => {
  const { memberName, memberUid, isMe, onEdit, onDelete, onEditClick } = props;
  const id = React.useId();

  const onEditHandler = (name: string, uid: string) => {
    onEdit?.({ name, member_uid: uid });
    onEditClick?.(true);
  };

  const onDeleteHandler = (name: string, uid: string) => {
    onDelete?.({ name, member_uid: uid });
  };

  return (
    <div
      id={`id-${id}`}
      data-member-id={memberUid}
      className="w-100 flex justify-between pb-1 border-b border-light-2 dark:border-black-3"
    >
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
          className="dark:text-dark-2 text-dark-4 cursor-pointer"
          icon={<EditIcon size={24} />}
          onClick={() => {
            onEditHandler(memberName, memberUid);
          }}
        />
        <ButtonIcon
          className="dark:text-dark-2 text-dark-4 cursor-pointer"
          icon={<DeleteIcon size={24} />}
          onClick={() => onDeleteHandler(memberName, memberUid)}
        />
      </div>
    </div>
  );
});
