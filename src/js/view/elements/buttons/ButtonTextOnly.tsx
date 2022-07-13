import React from "react";
import classnames from "classnames";
import { TextBodyMedium } from "../typo";
import { BtnProps } from "./BtnProps";

export const ButtonTextOnly = (props: BtnProps) => {
  const { children, type, disabled, className = "" } = props;

  const textClasses = classnames({
    "text-light-4": !disabled,
    "text-dark-2": disabled,
  });

  return (
    <button
      className={`btn btn-ghost
      hover:bg-transparent hover:text-light-2
      focus:bg-transparent focus:text-light-0 
      focus-visible:bg-transparent focus-visible:text-light-0 
      focus-visible:outline-light-0
      normal-case ${className}`}
      type={type}
      disabled={disabled}
    >
      <TextBodyMedium className={textClasses}>{children}</TextBodyMedium>
    </button>
  );
};
