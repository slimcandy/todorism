import React from "react";
import { BtnProps } from "./BtnProps";

export const ButtonTransparent = (props: BtnProps) => {
  const { children, type, disabled, className = "" } = props;

  return (
    <button
      className={`btn
      hover:bg-transparent hover:text-green-3
      focus:bg-transparent focus:text-green-2
      focus-visible:bg-transparent focus-visible:text-green-2
      focus-visible:outline-green-2
      normal-case ${className}`}
      type={type}
      disabled={disabled}
    >
      <span className="text-medium font-medium">{children}</span>
    </button>
  );
};
