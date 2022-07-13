import React from "react";
import classnames from "classnames";
import { TextBodyMedium } from "../typo";
import { BtnProps } from "./BtnProps";

export const ButtonPrimary = (props: BtnProps) => {
  const { children, type, disabled, className = "" } = props;

  const textClasses = classnames({
    "text-black-0": !disabled,
    "text-dark-2": disabled,
  });

  return (
    <button
      className={`btn btn-primary
      focus:bg-green-2 focus-visible:bg-green-2
      normal-case ${className}`}
      type={type}
      disabled={disabled}
    >
      <TextBodyMedium className={textClasses}>{children}</TextBodyMedium>
    </button>
  );
};
