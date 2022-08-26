import React, { useState } from "react";
import { TagMe } from "../../elements/TagMe";
import { DeleteIcon, EditIcon } from "../../icons";
import { ButtonIcon } from "../../elements";

type Props = {
  memberName: string;
  memberUid: string;
  isMe: boolean;
  onEdit: (member: {name: string, member_uid: string})=>void
  onEditClick: (value: boolean)=>void
};

export const MembersListItem = (props: Props) => {
  const { memberName, memberUid, isMe, onEdit, onEditClick} = props;

  const firstValue = String(memberName) === "undefined" ? "" : String(memberName);
  const [localValue, ] = React.useState(firstValue);
  const [member, setMember] = useState<{name: string, member_uid: string}>({name: "", member_uid: ""});

  const onEditHandler = (name: string, id: string) => {
    setMember({name, member_uid: id});
    console.log("onEditClick member ",member)
    onEdit?.({name, member_uid: id});
    onEditClick?.(true)
  }

  return (
    <div id={memberUid}
         className="w-100 flex justify-between pb-1 border-b border-light-2 dark:border-black-3">
      <div className="flex items-center">
        <div>
          <span className="mr-2 dark:bg-dark-0 bg-light-4 focus:outline-none w-full">
            {localValue}
          </span>
        </div>
        {isMe && <TagMe />}
      </div>
      <div className="flex">
        <ButtonIcon
          className="dark:text-dark-2 text-dark-4 cursor-pointer"
          icon={<EditIcon size={24} />}
          onClick={()=> {
            onEditHandler(memberName, memberUid);
          }}
        />
        <ButtonIcon
          className="dark:text-dark-2 text-dark-4 cursor-pointer"
          icon={<DeleteIcon size={24} />}
        />
      </div>
    </div>
  );
};
