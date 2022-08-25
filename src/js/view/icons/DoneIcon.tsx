import React from "react";
import { SVGprops } from "../../interfaces";

export const DoneIcon = (props: SVGprops) => {
  const { size, fill = "currentColor", className = "" } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.8102 6.40704C28.2468 6.74533 28.3264 7.37347 27.9881 7.81002L14.556 25.1433C14.3764 25.3751 14.1041 25.5164 13.8111 25.5298C13.5182 25.5431 13.2341 25.4272 13.0342 25.2127L3.79959 15.308C3.42297 14.904 3.44513 14.2713 3.84908 13.8946C4.25303 13.518 4.88581 13.5402 5.26243 13.9441L13.6953 22.989L26.4072 6.58494C26.7455 6.14839 27.3737 6.06874 27.8102 6.40704Z"
        fill={fill}
      />
    </svg>
  );
};
