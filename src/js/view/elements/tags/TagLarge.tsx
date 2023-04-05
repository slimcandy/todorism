import React from "react";
import { classesOf } from "../../../utils";
import { TextBodyStandard } from "../typography";
import { TagProps } from "./TagProps";

export const TagLarge = (props: TagProps) => {
  const { children, isActive = false, className = "", onClick } = props;

  const tagClasses = classesOf(
    "p-3 min-h-10 rounded-xl text-light-4 flex align-items-center",
    isActive && "bg-green-0",
    !isActive && "bg-black-3",
    className
  );

  return (
    <button className={tagClasses} onClick={onClick}>
      <TextBodyStandard>{children}</TextBodyStandard>
    </button>
  );
};
