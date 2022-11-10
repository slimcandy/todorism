import React from "react";
import { classesOf } from "../../../utils";
import { TextBodyLarge } from "../typography";
import { TagProps } from "./TagProps";

export const TagMedium = (props: TagProps) => {
  const { children, isActive = false, className = "", onClick } = props;

  const tagClasses = classesOf(
    "px-2 h-6 rounded flex align-items-center text-light-4",
    isActive && "bg-green-0",
    !isActive && "bg-black-3",
    className
  );

  return (
    <button className={tagClasses} onClick={onClick}>
      <TextBodyLarge>{children}</TextBodyLarge>
    </button>
  );
};
