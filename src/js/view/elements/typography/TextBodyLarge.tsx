import React from "react";
import { TypographyProps } from "./TypographyProps";

export const TextBodyLarge = (props: TypographyProps) => {
  const { children, className = "" } = props;

  return (
    <span className={`text-h3 font-regular ${className}`}>{children}</span>
  );
};
