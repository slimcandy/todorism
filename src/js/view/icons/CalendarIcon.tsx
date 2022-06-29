import React, { FunctionComponent } from "react";
import { SVGprops } from "../../interfaces";

export const CalendarIcon: FunctionComponent<SVGprops> = (props) => {
  const { size, fill = "none" } = props;
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
        d="M10.6666 1.66669C11.2189 1.66669 11.6666 2.1144 11.6666 2.66669V6.66669C11.6666 7.21897 11.2189 7.66669 10.6666 7.66669C10.1143 7.66669 9.66663 7.21897 9.66663 6.66669V2.66669C9.66663 2.1144 10.1143 1.66669 10.6666 1.66669Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.3334 1.66669C21.8857 1.66669 22.3334 2.1144 22.3334 2.66669V6.66669C22.3334 7.21897 21.8857 7.66669 21.3334 7.66669C20.7811 7.66669 20.3334 7.21897 20.3334 6.66669V2.66669C20.3334 2.1144 20.7811 1.66669 21.3334 1.66669Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.66663 12.12C3.66663 11.5677 4.11434 11.12 4.66663 11.12H27.3333C27.8856 11.12 28.3333 11.5677 28.3333 12.12C28.3333 12.6723 27.8856 13.12 27.3333 13.12H4.66663C4.11434 13.12 3.66663 12.6723 3.66663 12.12Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.31613 7.18047C5.46182 8.10049 5 9.48665 5 11.3334V22.6667C5 24.5134 5.46182 25.8995 6.31613 26.8196C7.15797 27.7262 8.52393 28.3334 10.6667 28.3334H21.3333C23.4761 28.3334 24.842 27.7262 25.6839 26.8196C26.5382 25.8995 27 24.5134 27 22.6667V11.3334C27 9.48665 26.5382 8.10049 25.6839 7.18047C24.842 6.27387 23.4761 5.66669 21.3333 5.66669H10.6667C8.52393 5.66669 7.15797 6.27387 6.31613 7.18047ZM4.85054 5.81957C6.17536 4.39284 8.14273 3.66669 10.6667 3.66669H21.3333C23.8573 3.66669 25.8246 4.39284 27.1495 5.81957C28.4618 7.23288 29 9.18006 29 11.3334V22.6667C29 24.82 28.4618 26.7672 27.1495 28.1805C25.8246 29.6072 23.8573 30.3334 21.3333 30.3334H10.6667C8.14273 30.3334 6.17536 29.6072 4.85054 28.1805C3.53818 26.7672 3 24.82 3 22.6667V11.3334C3 9.18006 3.53818 7.23288 4.85054 5.81957Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6606 18.2667C14.6606 17.5303 15.2576 16.9333 15.994 16.9333H16.006C16.7423 16.9333 17.3393 17.5303 17.3393 18.2667C17.3393 19.0031 16.7423 19.6 16.006 19.6H15.994C15.2576 19.6 14.6606 19.0031 14.6606 18.2667Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.72571 18.2667C9.72571 17.5303 10.3227 16.9333 11.059 16.9333H11.071C11.8074 16.9333 12.4044 17.5303 12.4044 18.2667C12.4044 19.0031 11.8074 19.6 11.071 19.6H11.059C10.3227 19.6 9.72571 19.0031 9.72571 18.2667Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.72571 22.2667C9.72571 21.5303 10.3227 20.9333 11.059 20.9333H11.071C11.8074 20.9333 12.4044 21.5303 12.4044 22.2667C12.4044 23.0031 11.8074 23.6 11.071 23.6H11.059C10.3227 23.6 9.72571 23.0031 9.72571 22.2667Z"
        fill={fill}
      />
    </svg>
  );
};
