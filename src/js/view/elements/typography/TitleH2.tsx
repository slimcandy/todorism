import React from "react";
import { TypographyProps } from "./TypographyProps";

export const TitleH2 = (props: TypographyProps) => {
  const { children, className = "" } = props;

  return (
    <h2 className={`text-h2 font-bold font-normal ${className}`}>{children}</h2>
  );
};
