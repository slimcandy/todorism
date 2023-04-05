import React from "react";
import { TypographyProps } from "../TypographyProps";

export const TextBodyStandard = (props: TypographyProps) => {
  const { children, className = "", fontWeight = "normal" } = props;

  return (
    <span
      className={`text-medium font-${fontWeight} font-family-${fontWeight} ${className}`}
    >
      {children}
    </span>
  );
};
