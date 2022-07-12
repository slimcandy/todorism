import React from "react";
import { TextBodyMedium } from "../typo";
import { BtnProps } from "./BtnProps";
/* TODO: remove as boolean */

export const ButtonPrimary = (props: BtnProps) => {
  const { children, type, disabled, className = "" } = props;
  return (
    <button
      className={`btn btn-primary primary ${className}`}
      type={type}
      disabled={disabled as boolean}
    >
      <TextBodyMedium className="">{children}</TextBodyMedium>
    </button>
  );
};
