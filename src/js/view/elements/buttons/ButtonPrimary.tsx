import React from "react";
import { TextBodyMedium } from "../typo";
import { BtnProps } from "./BtnProps";

export const ButtonPrimary = (props: BtnProps) => {
  const { children, type, disabled, className = "" } = props;
  return (
    <button
      className={`btn btn-primary primary ${className}`}
      type={type}
      disabled={disabled}
    >
      <TextBodyMedium>{children}</TextBodyMedium>
    </button>
  );
};
