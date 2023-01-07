import React, { memo } from "react";
import { MembersListItem } from "./MembersListItem";
import { MembersListProps } from "./MemberListProps";

export const MembersList = memo((props: MembersListProps) => {
  const { accessIds, list, onEdit, onDelete, onFinishEdit, onFocusInput } =
    props;

  return (
    <>
      {list.map((member) => (
        <div key={member.member_uid}>
          <MembersListItem
            memberName={member.name}
            memberUid={member.member_uid}
            isMe={member.member_uid === accessIds.memberUid}
            onEdit={onEdit}
            onFinishEdit={onFinishEdit}
            onFocusInput={onFocusInput}
            onDelete={onDelete}
          />
        </div>
      ))}
    </>
  );
});
