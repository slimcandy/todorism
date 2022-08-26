import React, { memo } from "react";
import { BtnIconProps } from "./BtnIconProps";

export const ButtonIcon = memo((props: BtnIconProps) => {
  const { icon, type, disabled, className = "", ...rest } = props;
  return (
    <button
      {...rest}
      className={`btn btn-ghost btn-square
      hover:bg-transparent 
      focus-visible:bg-transparent
      rounded-xl
      normal-case ${className}`}
      type={type}
      disabled={disabled}
    >
      {icon}
    </button>
  );
});
