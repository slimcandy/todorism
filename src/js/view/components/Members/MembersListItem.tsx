import React from "react";
import { TagMe } from "../../elements/TagMe";
import { DeleteIcon, EditIcon } from "../../icons";
import { ButtonIcon } from "../../elements";

type Props = {
  memberName: string;
  isMe: boolean;
};

export const MembersListItem = (props: Props) => {
  const { memberName, isMe } = props;

  const firstValue =
    String(memberName) === "undefined" ? "" : String(memberName);

  return (
    <div className="w-100 flex justify-between pb-1 border-b border-light-2 dark:border-black-3">
      <div className="flex items-center">
        <div>
          <span className="mr-2 dark:bg-dark-0 bg-light-4 focus:outline-none w-full">
            {firstValue}
          </span>
        </div>
        {isMe && <TagMe />}
      </div>
      <div className="flex">
        <ButtonIcon
          className="dark:text-dark-2 text-dark-4 cursor-pointer"
          icon={<EditIcon size={24} />}
          onClick={() => {}}
        />
        <ButtonIcon
          className="dark:text-dark-2 text-dark-4 cursor-pointer"
          icon={<DeleteIcon size={24} />}
        />
      </div>
    </div>
  );
};
