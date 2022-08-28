import React, { memo, useEffect, useState } from "react";
import { IMember } from "./IMember";
import { MembersListItem } from "./MembersListItem";

type MembersListProps = {
  list: Array<IMember>;
  onEdit: (member: { name: string; member_uid: string }) => void;
  onDelete: (member: { name: string; member_uid: string }) => void;
  onEditClick: (value: boolean) => void;
};

export const MembersList = memo((props: MembersListProps) => {
  const { list, onEdit, onDelete, onEditClick } = props;

  const [members, setMembers] = useState(list);

  useEffect(() => {
    setMembers(list);
  }, [list]);

  return (
    <>
      {members.map((member) => (
        <div className="mb-2">
          <MembersListItem
            key={member.member_uid}
            memberName={member.name}
            memberUid={member.member_uid}
            isMe={false}
            onEdit={onEdit}
            onEditClick={onEditClick}
            onDelete={onDelete}
          />
        </div>
      ))}
    </>
  );
});
