import React from "react";
import { IMember } from "./IMember";
import { MembersListItem } from "./MembersListItem";

type MembersListProps = {
  list: Array<IMember>;
};

export const MembersList = (props: MembersListProps) => {
  const { list } = props;
  return (
    <>
      {list.map((member) => (
        <div className="mb-2">
          <MembersListItem
            key={member.member_uid}
            memberName={member.name}
            isMe={false}
          />
        </div>
      ))}
    </>
  );
};
