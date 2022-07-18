import React from "react";
import { SVGprops } from "../../interfaces";

export const ZoomIcon = (props: SVGprops) => {
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
        d="M25.6263 25.6262C26.0168 25.2357 26.65 25.2357 27.0405 25.6262L29.7071 28.2929C30.0977 28.6834 30.0977 29.3166 29.7071 29.7071C29.3166 30.0976 28.6835 30.0976 28.2929 29.7071L25.6263 27.0404C25.2357 26.6499 25.2357 26.0167 25.6263 25.6262Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 3.33331C8.55672 3.33331 3.33337 8.55666 3.33337 15C3.33337 21.4433 8.55672 26.6666 15 26.6666C21.4434 26.6666 26.6667 21.4433 26.6667 15C26.6667 8.55666 21.4434 3.33331 15 3.33331ZM1.33337 15C1.33337 7.45209 7.45215 1.33331 15 1.33331C22.5479 1.33331 28.6667 7.45209 28.6667 15C28.6667 22.5479 22.5479 28.6666 15 28.6666C7.45215 28.6666 1.33337 22.5479 1.33337 15Z"
        fill={color}
      />
    </svg>
  );
};
