import React from "react";
import { TypoProps } from "./TypoProps";

export const TitleH2 = (props: TypoProps) => {
  const { children, className = "" } = props;

  return (
    <h2 className={`text-h2 font-bold ${className}`}>
      {children}
    </h2>
  );
};
