import React from "react";
import { TypographyProps } from "./TypographyProps";

export const TextBodyMedium = (props: TypographyProps) => {
  const { children, className = "" } = props;

  return (
    <span className={`text-medium font-medium font-normal ${className}`}>
      {children}
    </span>
  );
};
