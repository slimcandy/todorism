import React from "react";
import { TypographyProps } from "../TypographyProps";

export const TextBodyLarge = (props: TypographyProps) => {
  const { children, className = "", fontWeight = "normal" } = props;

  return (
    <span
      className={`text-h3 font-${fontWeight} font-family-${fontWeight} ${className}`}
    >
      {children}
    </span>
  );
};
