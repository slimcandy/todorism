import React from "react";
import { IMember } from "./IMember";
import { MembersListItem } from "./MembersListItem";

type MembersListProps = {
  list: Array<IMember>;
  onEdit: ()=>void
};

export const MembersList = (props: MembersListProps) => {
  const { list, onEdit } = props;
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
          />
        </div>
      ))}
    </>
  );
};
