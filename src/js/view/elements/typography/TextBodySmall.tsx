import React from "react";
import { TypographyProps } from "./TypographyProps";

export const TextBodySmall = (props: TypographyProps) => {
  const { children, className = "" } = props;

  return (
    <span className={`text-small font-regular ${className}`}>{children}</span>
  );
};
