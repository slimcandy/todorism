import React from "react";
import { TypographyProps } from "./TypographyProps";

export const TextBodyStandard = (props: TypographyProps) => {
  const { children, className = "" } = props;

  return (
    <span className={`text-medium font-regular ${className}`}>{children}</span>
  );
};
