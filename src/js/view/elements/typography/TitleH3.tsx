import React from "react";
import { TypographyProps } from "./TypographyProps";

export const TitleH3 = (props: TypographyProps) => {
  const { children, className = "" } = props;

  return (
    <h3 className={`text-h3 font-bold font-normal ${className}`}>{children}</h3>
  );
};
