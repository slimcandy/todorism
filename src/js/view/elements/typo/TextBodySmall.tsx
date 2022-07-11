import React from "react";
import { TypoProps } from "./TypoProps";

export const TextBodySmall = (props: TypoProps) => {
  const { children, className = "" } = props;

  return (
    <span className={`text-small font-regular ${className}`}>{children}</span>
  );
};
