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
    ...rest
  } = props;

  const textClasses = classesOf(
    "text-black-0",
    textClassName,
    !disabled && "text-black-0",
    disabled && "text-light-0 dark:text-dark-2"
  );

  return (
    <button
      {...rest}
      className={`btn btn-primary w-full 
      dark:bg-green-4 bg-green-3
      dark:focus:bg-green-2 dark:focus-visible:bg-green-2
      focus:bg-green-1 focus-visible:bg-green-1
      disabled:bg-light-3 dark:disabled:bg-black-2
      normal-case ${className}`}
      type={type}
      disabled={disabled}
    >
      {icon}
      {children && (
        <TextBodyMedium className={textClasses}>{children}</TextBodyMedium>
      )}
    </button>
  );
};
