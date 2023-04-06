import React from "react";
import { useTranslation } from "react-i18next";
import { TakenListPointItemProps } from "./TakenListPointItemProps";
import { ListPointItem } from "../../ListPointItem/ListPointItem";
import { TagSmall } from "../../../../elements";

export const TakenListPointItem = (props: TakenListPointItemProps) => {
  const { listPoint, onCheck } = props;

  const { t } = useTranslation();

  const listPointCount = () => (
    <TagSmall isButton={false} className="w-max cursor-default">{`${
      listPoint.count
    } ${t(`list_point.short_units.${listPoint.point.unit}`)}`}</TagSmall>
  );

  const actionButtons = () => (
    <input
      type="checkbox"
      className="checkbox checkbox-primary rounded"
      checked={listPoint.isTaken}
      onChange={onCheck}
    />
  );

  const content = () => (
    <div className="flex grow items-center justify-between gap-x-4">
      {listPointCount()}
      {actionButtons()}
    </div>
  );

  return (
    <ListPointItem
      listPointName={listPoint.point.item.name}
      grayTitle={listPoint.isTaken}
      content={content()}
    />
  );
};
