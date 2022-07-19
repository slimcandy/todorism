import React, { memo } from "react";
import classnames from "classnames";
import { TextBodyMedium } from "../typo";
import { BtnProps } from "./BtnProps";

export const ButtonPrimary = memo((props: BtnProps) => {
  const { children, icon, type, disabled, className = "", buttonRef } = props;

  const textClasses = classnames({
    "text-black-0": !disabled,
    "text-light-0 dark:text-dark-2": disabled,
  });

  return (
    <button
      ref={buttonRef}
      className={`btn btn-primary w-full
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
});
