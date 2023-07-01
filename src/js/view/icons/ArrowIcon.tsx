import React from "react";
import { classesOf } from "../../utils";
import { SVGprops } from "../../interfaces";

export const ArrowIcon = (props: SVGprops) => {
  const {
    size,
    color = "currentColor",
    fill = "none",
    direction = "up",
    className,
  } = props;

  const arrowClasses = classesOf(
    "origin-center",
    direction === "down" && "rotate-180",
    direction === "right" && "rotate-90",
    direction === "left" && "-rotate-90",
    className
  );

  return (
    <svg
      className={arrowClasses}
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 32 32"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4262 10.6662C14.8434 9.24903 17.1565 9.24903 18.5737 10.6662L27.267 19.3596C27.6576 19.7501 27.6576 20.3832 27.267 20.7738C26.8765 21.1643 26.2434 21.1643 25.8528 20.7738L17.1595 12.0804C16.5234 11.4443 15.4765 11.4443 14.8404 12.0804L6.14705 20.7738C5.75652 21.1643 5.12336 21.1643 4.73283 20.7738C4.34231 20.3832 4.34231 19.7501 4.73283 19.3596L13.4262 10.6662Z"
        fill={color}
      />
    </svg>
  );
};
