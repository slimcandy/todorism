import React from "react";

import { IBtnIconProps } from "./BtnIconProps";

export const BtnIcon = (props: IBtnIconProps) => {
  const { icon, className = "", onClick } = props;

  return (
    <button
      className={`btn btn-circle btn-ghost ${className}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
