import React from "react";
import { useTranslation } from "react-i18next";
import { ITagsGroupProps } from "./TagsGroupProps";
import { classesOf } from "../../../utils";

import { TagSmall, TagMedium, TagLarge } from "../tags";

export const TagsGroup = (props: ITagsGroupProps) => {
  const {
    tags = [],
    activeTagIndex,
    size,
    readonly,
    localizationPath,
    onClick,
  } = props;

  const { t } = useTranslation();

  const tagComponentsClasses = classesOf(
    "text-small",
    !readonly && "cursor-pointer"
  );

  const TagComponents = {
    s: TagSmall,
    m: TagMedium,
    l: TagLarge,
  };

  const TagComponent = size ? TagComponents[size] : TagComponents.l;

  const checkActiveTag = (index: number) => index === activeTagIndex;

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    event.preventDefault();

    const isActiveTag = checkActiveTag(index);

    if (!readonly && !isActiveTag) {
      onClick(index);
    }
  };

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tagName, index) => (
        <TagComponent
          key={tagName}
          isActive={!readonly && checkActiveTag(index)}
          className={tagComponentsClasses}
          onClick={(event) => handleClick(event, index)}
        >
          {localizationPath ? t(`${localizationPath}.${tagName}`) : tagName}
        </TagComponent>
      ))}
    </ul>
  );
};
