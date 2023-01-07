import React from "react";
import { IMembersListItemProps } from "./MembersListItemProps";
import { TextBodyLarge } from "../typography";

export const MembersListItem = (props: IMembersListItemProps) => {
  const { name, actionContent } = props;

  return (
    <div className="flex justify-between items-center w-full px-2 py-4 rounded-xl modified-list-item text-white">
      <TextBodyLarge fontWeight="semibold">{name}</TextBodyLarge>
      {actionContent}
    </div>
  );
};
