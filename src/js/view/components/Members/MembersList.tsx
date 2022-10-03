import React, { memo, useEffect, useState } from "react";
import { IMember } from "./IMember";
import { MembersListItem } from "./MembersListItem";

type MembersListProps = {
  list: Array<IMember>;
  onEdit: (member: IMember) => void;
  onDelete: (member: IMember) => void;
  onFinishEdit: (value: boolean) => void;
  onFocusInput: (value: boolean) => void;
};

export const MembersList = memo((props: MembersListProps) => {
  const { list, onEdit, onDelete, onFinishEdit, onFocusInput } = props;
  const [members, setMembers] = useState(list);

  useEffect(() => {
    setMembers(list);
  }, [list]);

  return (
    <>
      {members.map((member) => (
        <div className="mb-2"
             key={member.member_uid}>
          <MembersListItem
            memberName={member.name}
            memberUid={member.member_uid}
            isMe={member.member_uid === list[0].member_uid}
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
