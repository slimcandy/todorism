import React from "react";
import { IMember } from "./IMember";
import { MembersListItem } from "./MembersListItem";

type MembersListProps = {
  list: Array<IMember>;
  onEdit: (member: {name: string, member_uid: string})=>void
  onEditClick: (value: boolean)=>void
};

export const MembersList = (props: MembersListProps) => {
  const { list, onEdit, onEditClick } = props;
  return (
    <>
      {list.map((member) => (
        <div className="mb-2">
          <MembersListItem
            key={member.member_uid}
            memberName={member.name}
            memberUid={member.member_uid}
            isMe={false}
            onEdit={onEdit}
            onEditClick={onEditClick}
          />
        </div>
      ))}
    </>
  );
};
