import React from "react";
import { SVGprops } from "../../interfaces";

export const EditIcon = (props: SVGprops) => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.6898 1.91634C22.2455 1.71742 23.8193 2.35357 25.4186 3.8583L25.4204 3.86004C27.025 5.37749 27.7555 6.91682 27.6459 8.48466C27.54 9.99966 26.6617 11.2819 25.6602 12.34L23.9666 14.1327C23.8968 14.2434 23.8061 14.3389 23.7006 14.4142L14.719 23.9209C14.4105 24.2568 13.9952 24.5413 13.6015 24.7518C13.2027 24.965 12.7414 25.1475 12.3083 25.2245L12.3017 25.2257L8.00987 25.9587C6.96912 26.1382 5.97112 25.8781 5.26018 25.2039C4.55024 24.5306 4.23653 23.5488 4.35275 22.5028L4.35309 22.4998L4.84856 18.1611C4.90611 17.7295 5.06639 17.2624 5.25534 16.8573C5.4436 16.4536 5.70047 16.0255 6.00445 15.7019L6.0064 15.6999L15.1178 6.05579C15.1238 6.04923 15.1299 6.04275 15.1361 6.03635L16.9531 4.11319C17.9551 3.05469 19.1865 2.10857 20.6898 1.91634ZM24.2064 10.9665L22.7222 12.5374C19.8559 12.0473 17.5666 9.88204 16.9306 7.04921L18.4062 5.48741C19.2973 4.54624 20.1269 4.00461 20.9435 3.90019C21.1571 3.87287 21.3897 3.87328 21.6431 3.91548C22.2958 4.02421 23.0865 4.41034 24.0473 5.31419C25.3885 6.58291 25.7045 7.57659 25.6507 8.3452C25.6056 8.99117 25.2895 9.65996 24.7229 10.3743C24.569 10.5682 24.3967 10.7654 24.2064 10.9665ZM7.46215 17.0713L15.3494 8.72287C16.3393 11.3384 18.4801 13.3596 21.1447 14.2072L13.2596 22.5531L13.2477 22.5662C13.1435 22.6805 12.9352 22.8401 12.6585 22.9881C12.3855 23.134 12.1281 23.2247 11.9611 23.2549L7.6716 23.9875L7.67006 23.9878C7.16414 24.075 6.82881 23.9351 6.63641 23.7527C6.44319 23.5694 6.28369 23.2383 6.34036 22.7251L6.34052 22.7237L6.83225 18.4177C6.85609 18.2489 6.93558 17.9864 7.06793 17.7026C7.20271 17.4136 7.35285 17.1879 7.46215 17.0713ZM4 28.3333C3.44772 28.3333 3 28.781 3 29.3333C3 29.8856 3.44772 30.3333 4 30.3333H28C28.5523 30.3333 29 29.8856 29 29.3333C29 28.781 28.5523 28.3333 28 28.3333H4Z"
        fill={fill}
      />
    </svg>
  );
};
