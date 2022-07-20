import React from "react";
import { TypoProps } from "./TypoProps";

export const TitleH1 = (props: TypoProps) => {
  const { children, className = "" } = props;

  return (
    <h1 className={`text-h1 font-bold font-main ${className}`}>{children}</h1>
  );
};
