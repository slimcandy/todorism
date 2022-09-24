import React from "react";
import { ITagsGroupProps } from "./TagsGroupProps";
import { classesOf } from "../../../utils";

import { TagSmall, TagMedium, TagLarge } from "../tags";

export const TagsGroup = (props: ITagsGroupProps) => {
  const { tags = [], activeTagIndex, size, readonly, onClick } = props;

  const tagComponentsClasses = classesOf(
    "text-small",
    !readonly && "cursor-pointer"
  );

  const TagComponents = {
    s: TagSmall,
    m: TagMedium,
    l: TagLarge,
  };

  const TagComponent = TagComponents[size] || TagComponents.l;

  const checkActiveTag = (index: number) => index === activeTagIndex;

  const handleClick = (index: number) => {
    const isActiveTag = checkActiveTag(index);

    if (!readonly && !isActiveTag) {
      onClick(index);
    }
  };

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tagName, index) => (
        <TagComponent
          isActive={!readonly && checkActiveTag(index)}
          className={tagComponentsClasses}
          onClick={() => handleClick(index)}
        >
          {tagName}
        </TagComponent>
      ))}
    </ul>
  );
};
