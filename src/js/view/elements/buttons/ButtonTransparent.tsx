import React from "react";
import { TextBodyMedium } from "../typography";
import { BtnProps } from "./BtnProps";

export const ButtonTransparent = (props: BtnProps) => {
  const { children, icon, type, disabled, className = "", onClick } = props;

  return (
    <button
      className={`btn btn-ghost
      hover:bg-transparent hover:text-green-3
      focus:bg-transparent focus:text-green-2
      focus-visible:bg-transparent focus-visible:text-green-2
      focus-visible:outline-green-2
      normal-case ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {children && (
        <TextBodyMedium className={icon ? "ml-2" : ""}>
          {children}
        </TextBodyMedium>
      )}
    </button>
  );
};
