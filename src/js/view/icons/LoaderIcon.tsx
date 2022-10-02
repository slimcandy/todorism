import React from "react";
import { SVGprops } from "../../interfaces";

export const LoaderIcon = (props: SVGprops) => {
  const { size, className = "" } = props;
  return (
    <svg
      className={className}
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="26" stroke="#3E4153" strokeWidth="10" />
      <path
        d="M32 58.0003C46.3594 58.0003 58 46.3597 58 32.0003C58 25.139 55.3422 18.8984 51 14.252"
        stroke="#8BFFC1"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
};
