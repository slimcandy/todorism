import React from "react";
import { SVGprops } from "../../interfaces";

export const PlusIcon = (props: SVGprops) => {
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
        d="M16.6667 5C16.6667 4.44772 16.219 4 15.6667 4C15.1144 4 14.6667 4.44772 14.6667 5V14.6667H5C4.44772 14.6667 4 15.1144 4 15.6667C4 16.219 4.44772 16.6667 5 16.6667H14.6667V27C14.6667 27.5523 15.1144 28 15.6667 28C16.219 28 16.6667 27.5523 16.6667 27V16.6667H27C27.5523 16.6667 28 16.219 28 15.6667C28 15.1144 27.5523 14.6667 27 14.6667H16.6667V5Z"
        fill={color}
      />
    </svg>
  );
};
