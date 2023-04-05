import React from "react";

import { IBtnIconProps } from "./BtnIconProps";

export const BtnIcon = (props: IBtnIconProps) => {
  const { icon, className = "", disabled = false, onClick } = props;

  return (
    <button
      className={`
        btn btn-circle btn-ghost
        disabled:dark:text-dark-1 disabled:text-dark-4
        ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};
