import React from "react";
import { SVGprops } from "../../interfaces";

export const Ellipse = (props: SVGprops) => {
  const { size = "197", fill = "currentColor" } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M197 97.712C197 165.603 165.603 197 97.712 197C29.8207 197 0 165.603 0 97.712C0 29.8207 29.8207 0 97.712 0C165.603 0 197 29.8207 197 97.712Z"
        fill={fill}
      />
    </svg>
  );
};
