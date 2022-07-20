import React from "react";
import { classesOf } from "../../../utils";
import { TextBodyMedium } from "../typography";
import { BtnProps } from "./BtnProps";

export const ButtonPrimary = (props: BtnProps) => {
  const {
    children,
    icon,
    type,
    disabled,
    className = "",
    textClassName = "",
  } = props;

  const textClasses = classesOf(
    "text-black-0",
    textClassName,
    "text-black-0" && !disabled,
    "text-light-0 dark:text-dark-2" && disabled
  );

  return (
    <button
      className={`btn btn-primary w-full text-black-0
      dark:focus:bg-green-2 dark:focus-visible:bg-green-2
      focus:bg-green-1 focus-visible:bg-green-1
      disabled:bg-light-3 dark:disabled:bg-black-2
      normal-case ${className}`}
      type={type}
      disabled={disabled}
    >
      {icon}
      <TextBodyMedium className={textClasses}>{children}</TextBodyMedium>
    </button>
  );
};
