import React, { memo } from "react";
import { MembersEditListItem } from "../MembersEditListItem/MembersEditListItem";
import { MembersListProps } from "./MemberListProps";

export const MembersEditList = memo((props: MembersListProps) => {
  const { accessIds, list, onEdit, onDelete, onFinishEdit, onFocusInput } =
    props;

  return (
    <>
      {list.map((member) => (
        <MembersEditListItem
          key={member.member_uid}
          memberName={member.name}
          memberUid={member.member_uid}
          isMe={member.member_uid === accessIds.memberUid}
          onEdit={onEdit}
          onFinishEdit={onFinishEdit}
          onFocusInput={onFocusInput}
          onDelete={onDelete}
        />
      ))}
    </>
  );
});
