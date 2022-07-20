import React from "react";
import { TypoProps } from "./TypoProps";

export const TitleH3 = (props: TypoProps) => {
  const { children, className = "" } = props;

  return (
    <h3 className={`text-h3 font-bold font-main ${className}`}>{children}</h3>
  );
};
