import React from "react";
import { classesOf } from "../../../utils";
import { TextBodyMedium } from "../typo";
import { BtnProps } from "./BtnProps";

export const ButtonSecondary = (props: BtnProps) => {
  const {
    children,
    icon,
    type,
    disabled,
    className = "",
    textClassName = "",
  } = props;

  const textClasses = classesOf(
    textClassName,
    "text-light-4" && !disabled,
    "text-dark-2" && disabled
  );

  return (
    <button
      className={`btn btn-secondary w-full
      dark:focus:bg-black-4 dark:focus-visible:bg-black-4 
      hover:bg-black-3 dark:hover:bg-black-3
      focus:bg-dark-1 focus-visible:bg-dark-4 
      normal-case ${className}`}
      type={type}
      disabled={disabled}
    >
      {icon}
      <TextBodyMedium className={textClasses || ""}>{children}</TextBodyMedium>
    </button>
  );
};
