import React from "react";
import { BtnIconProps } from "./BtnIconProps";

export const ButtonCircle = (props: BtnIconProps) => {
  const { icon, type, disabled, className = "", onClick } = props;

  return (
    <button
      className={`btn btn-primary btn-circle
      focus:bg-green-2 focus-visible:bg-green-2
      text-black-0
      normal-case ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
