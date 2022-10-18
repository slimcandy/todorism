import React from "react";
import { IPrivateListPointItemProps } from "./PrivateListPointItemProps";
import { ListPointItem } from "../../ListPointItem/ListPointItem";
import { TagSmall, BtnIcon } from "../../../../elements";
import { EditIcon, DeleteIcon } from "../../../../icons";

export const PrivateListPointItem = (props: IPrivateListPointItemProps) => {
  const { listPoint, onEdit, onRemove } = props;

  const listPointCount = () => (
    <TagSmall>{`${listPoint.count} ${listPoint.unit}`}</TagSmall>
  );

  const actionButtons = () => (
    <div className="flex gap-x-2">
      <BtnIcon
        icon={<EditIcon size={16} />}
        className="btn-sm"
        onClick={onEdit}
      />
      <BtnIcon
        icon={<DeleteIcon size={16} />}
        className="btn-sm"
        onClick={onRemove}
      />
    </div>
  );

  const content = () => (
    <div className="flex w-full items-center justify-between">
      {listPointCount()}
      {actionButtons()}
    </div>
  );

  return (
    <ListPointItem listPointName={listPoint.item.name} content={content()} />
  );
};
