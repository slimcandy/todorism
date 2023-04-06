import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ICommonListPointItemProps } from "./CommonListPointItemProps";
import { ListPointItem } from "../../ListPointItem/ListPointItem";
import {
  TagSmall,
  BtnIcon,
  TextBodySmall,
  ButtonTransparent,
  TagMe,
  TextBodyStandard,
  TextBodyLarge,
} from "../../../../elements";
import { ArrowIcon, KebabIcon, LoaderIcon, PlusIcon } from "../../../../icons";
import { classesOf } from "../../../../../utils";
import { ICommonListPoint } from "../../../../../interfaces";

export const CommonListPointItem = (props: ICommonListPointItemProps) => {
  const {
    listPoint,
    memberUid,
    loading,
    onBindListPoint,
    onShowListPointSettings,
    onClickTitle,
  } = props;

  const { t } = useTranslation();

  const [collapseToggle, setCollapseToggle] = useState<boolean>(false);

  const changeOuterContentCollapseStatus = () => {
    if (!collapseToggle && onClickTitle) {
      onClickTitle();
    }

    setCollapseToggle(!collapseToggle);
  };

  const showOuterContent = () =>
    listPoint.bindings.length > 0 && collapseToggle && !loading;

  const getBindingProgress = () => {
    let progress = 0;

    listPoint.bindings.forEach((binding) => {
      progress += Number(binding.count);
    });

    return progress;
  };

  const getTakenListPointCount = () => {
    const memberBinding = listPoint.bindings.find(
      (b) => b.member.memberUid === memberUid
    );
    return memberBinding ? memberBinding.count : 0;
  };

  const takenListPointCount = getTakenListPointCount();

  const bindingProgress = getBindingProgress();

  const bindingButtonClasses = classesOf(
    "btn btn-sm btn-square normal-case border-0",
    takenListPointCount === 0 &&
      "btn-primary focus:bg-green-2 focus-visible:bg-green-2",
    takenListPointCount > 0 && "dark:bg-green-0 text-white"
  );

  const outerBlockClasses = classesOf(
    "flex items-center justify-between gap-x-4 w-full transition duration-150 ease-out",
    loading && "opacity-10"
  );

  const listPointBindingCount = ({
    count,
  }: {
    count: ICommonListPoint["count"];
  }) => (
    <TagSmall isButton={false} className="w-max">{`${count} ${t(
      `list_point.short_units.${listPoint.unit}`
    )}`}</TagSmall>
  );

  const listPointBindingProgress = (
    <div className="flex items-center gap-x-1 w-max">
      <TagSmall isButton={false} className="w-max">{`${bindingProgress} ${t(
        `list_point.short_units.${listPoint.unit}`
      )}`}</TagSmall>

      <TextBodySmall>
        / {listPoint.count} {t(`list_point.short_units.${listPoint.unit}`)}
      </TextBodySmall>
    </div>
  );

  const listPointCount = (
    <div className="flex items-center gap-x-4">
      {!!takenListPointCount && <TagMe />}
      {!showOuterContent() && listPointBindingProgress}
    </div>
  );

  const actionButtons = (
    <div className="flex gap-x-2">
      <button className={bindingButtonClasses} onClick={onBindListPoint}>
        {takenListPointCount ? (
          <TextBodySmall>{takenListPointCount}</TextBodySmall>
        ) : (
          <PlusIcon size={16} />
        )}
      </button>

      <BtnIcon
        icon={<KebabIcon size={16} />}
        className="btn-sm"
        onClick={onShowListPointSettings}
      />
    </div>
  );

  const content = (
    <div className="flex grow relative">
      <div className={outerBlockClasses}>
        {listPointCount}
        {actionButtons}
      </div>
      {loading && (
        <LoaderIcon
          size={24}
          className="animate-spin absolute inset-0 m-auto"
        />
      )}
    </div>
  );

  const outerContent = showOuterContent() ? (
    <div className="collapse collapse-open">
      <div className="collapse-content flex flex-col justify-center gap-y-3 px-0 duration-200">
        <div className="flex justify-between pt-1">
          <TextBodyStandard>Разобрано</TextBodyStandard>
          {listPointBindingProgress}
        </div>

        <TextBodyStandard>Кто взял</TextBodyStandard>

        <ul className="flex flex-col gap-y-3">
          {listPoint.bindings.map((binding) => (
            <li className="flex justify-between" key={binding.member.name}>
              <div className="flex items-center gap-x-2">
                <TextBodyLarge className="font-semibold text-light-4">
                  {binding.member.name}
                </TextBodyLarge>
                {collapseToggle && binding.member.memberUid === memberUid && (
                  <TagMe />
                )}
              </div>

              {listPointBindingCount({
                count: binding.count,
              })}
            </li>
          ))}
        </ul>

        <ButtonTransparent
          className="btn-sm"
          icon={<ArrowIcon size={16} direction="up" />}
          onClick={() => setCollapseToggle(!collapseToggle)}
        >
          {t("hide")}
        </ButtonTransparent>
      </div>
    </div>
  ) : (
    <div />
  );

  return (
    <ListPointItem
      listPointName={listPoint.item.name}
      grayTitle={bindingProgress >= Number(listPoint.count)}
      isButton
      content={content}
      outerContent={outerContent}
      onClickTitle={changeOuterContentCollapseStatus}
    />
  );
};
