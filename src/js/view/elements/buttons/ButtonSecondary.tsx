import React from "react";
import classnames from "classnames";
import { TextBodyMedium } from "../typo";
import { BtnProps } from "./BtnProps";

export const ButtonSecondary = (props: BtnProps) => {
  const { children, type, disabled, className = "" } = props;

  const textClasses = classnames({
    "text-light-4": !disabled,
    "text-dark-2": disabled,
  });

  return (
    <button
      className={`btn btn-secondary
      focus:bg-black-4 focus-visible:bg-black-4 
      normal-case ${className}`}
      type={type}
      disabled={disabled}
    >
      <TextBodyMedium className={textClasses}>{children}</TextBodyMedium>
    </button>
  );
};
