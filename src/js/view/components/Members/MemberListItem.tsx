import React, { useCallback, useState } from "react";
import { TagMe } from "../../elements/TagMe";
import { DeleteIcon, DoneIcon, EditIcon } from "../../icons";
import { ButtonIcon } from "../../elements";

type Props = {
  memberName: string
  isMe?: boolean
}

export const MemberListItem = (props: Props) => {
  const { memberName, isMe } = props;
  const [isReadOnly, setIsReadOnly] = useState<boolean>(true);
  const role = "input";

  const onEdit = useCallback(() => {
    setIsReadOnly(!isReadOnly);
  }, [isReadOnly]);


  return (
    <div className="w-100 flex justify-between pb-1 border-b border-light-2 dark:border-black-3">
      <div className="flex items-center">
        {/* <div className="mr-2">{memberName}</div> */}
        {/* eslint-disable-next-line jsx-a11y/aria-role */}
        <div>
        <span role={role}
              className="mr-2 dark:bg-dark-0 bg-light-4 focus:outline-none w-full"
              contentEditable={!isReadOnly}>
          {memberName}</span>
        </div>
        {isMe && <TagMe />}
      </div>
      <div className="flex">
        {isReadOnly &&
          <ButtonIcon className="dark:text-dark-2 text-dark-4 cursor-pointer"
                      icon={<EditIcon size={24} />}
                      onClick={() => onEdit()} />
        }
        {!isReadOnly &&
          <ButtonIcon className="dark:text-dark-2 text-dark-4 cursor-pointer "
                      icon={<DoneIcon size={24} className="text-green-4"/>}
                      onClick={() => onEdit()} />
        }
        <ButtonIcon className="dark:text-dark-2 text-dark-4 cursor-pointer" icon={<DeleteIcon size={24} />} />
      </div>
    </div>
  );
};
