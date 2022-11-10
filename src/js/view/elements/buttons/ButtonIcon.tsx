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
      text-dark-3 dark:text-dark-2
      disabled:dark:text-dark-1
      disabled:text-dark-4
      rounded-xl
      cursor-pointer
      normal-case ${className}`}
      type={type}
      disabled={disabled}
    >
      {icon}
    </button>
  );
});
