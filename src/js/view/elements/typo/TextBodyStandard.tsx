import React from "react";
import { TypoProps } from "./TypoProps";

export const TextBodyStandard = (props: TypoProps) => {
  const { children, className = "" } = props;

  return (
    <span className={`text-medium font-regular ${className}`}>
      {children}
    </span>
  );
};
