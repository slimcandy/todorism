import React from "react";
import { TypoProps } from "./TypoProps";

export const TextBodyLarge = (props: TypoProps) => {
  const { children, className = "" } = props;

  return (
    <span className={`text-h3 font-regular ${className}`}>
      {children}
    </span>
  );
};
