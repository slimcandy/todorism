import React from "react";
import { SVGprops } from "../../interfaces";

export const MinusIcon = (props: SVGprops) => {
  const { size, color = "currentColor", fill = "none" } = props;
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 32 32"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 15.6667C28 16.219 27.5523 16.6667 27 16.6667L5 16.6667C4.44772 16.6667 4 16.219 4 15.6667C4 15.1144 4.44772 14.6667 5 14.6667L27 14.6667C27.5523 14.6667 28 15.1144 28 15.6667Z"
        fill={color}
      />
    </svg>
  );
};
