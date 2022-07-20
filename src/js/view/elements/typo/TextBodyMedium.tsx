import React from "react";
import { TypoProps } from "./TypoProps";

export const TextBodyMedium = (props: TypoProps) => {
  const { children, className = "" } = props;

  return (
    <span className={`text-medium font-medium font-main ${className}`}>
      {children}
    </span>
  );
};
