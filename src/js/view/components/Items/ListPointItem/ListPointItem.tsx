import React from "react";
import { IListPointItemProps } from "./ListPointItemProps";
import { TextBodyLarge } from "../../../elements";

export const ListPointItem = (props: IListPointItemProps) => {
  const { listPointName, content, onClick } = props;

  return (
    <div className="flex items-center py-4 gap-x-4 border-b border-black-3">
      <TextBodyLarge className="flex w-full text-light-4" onClick={onClick}>
        {listPointName}
      </TextBodyLarge>

      {content}
    </div>
  );
};
