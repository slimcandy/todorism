import React from "react";
import { classesOf } from "../../../utils";
import { TextBodySmall } from "../typography";
import { TagProps } from "./TagProps";

export const TagSmall = (props: TagProps) => {
  const {
    children,
    isActive = false,
    isButton = true,
    className = "",
    onClick,
  } = props;

  const tagClasses = classesOf(
    "p-1 h-6 rounded flex align-items-center",
    isActive && "bg-green-0 text-light-4",
    !isActive && "bg-black-3 text-dark-4",
    !isButton && "disabled cursor-text",
    className
  );

  return (
    <button className={tagClasses} onClick={onClick}>
      <TextBodySmall>{children}</TextBodySmall>
    </button>
  );
};
