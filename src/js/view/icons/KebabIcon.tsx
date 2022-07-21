import React from "react";
import { SVGprops } from "../../interfaces";

export const KebabIcon = (props: SVGprops) => {
  const { size, fill = "currentColor", className = "" } = props;
  return (
    <svg
      className={className}
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 32 32"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="12" width="8" height="8" rx="4" fill={fill} />
      <rect x="12" y="12" width="8" height="8" rx="4" fill={fill} />
      <rect x="12" y="24" width="8" height="8" rx="4" fill={fill} />
    </svg>
  );
};
