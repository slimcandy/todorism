import React from "react";
import { BtnIconProps } from "./BtnIconProps";

export const ButtonSquare = (props: BtnIconProps) => {
  const { icon, type, disabled, className = "" } = props;

  return (
    <button
      className={`btn btn-primary btn-square
      rounded-xl
      focus:bg-green-2 focus-visible:bg-green-2
      normal-case ${className}`}
      type={type}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};
