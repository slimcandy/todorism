import React from "react";
import { TypographyProps } from "./TypographyProps";

export const TitleH1 = (props: TypographyProps) => {
  const { children, className = "" } = props;

  return (
    <h1 className={`text-h1 font-bold font-normal ${className}`}>{children}</h1>
  );
};
