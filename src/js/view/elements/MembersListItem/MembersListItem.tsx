import React from "react";
import { IMembersListItemProps } from "./MembersListItemProps";
import { TextBodyLarge } from "../typography";

export const MembersListItem = (props: IMembersListItemProps) => {
  const { name, children } = props;

  return (
    <div
      className="flex items-center min-h-[57px] w-full p-2
                 zebra-list-item text-white
                "
    >
      <TextBodyLarge fontWeight="semibold">{name}</TextBodyLarge>
      {children}
    </div>
  );
};
