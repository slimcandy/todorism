import React from "react";
import { LoaderIcon } from "../../icons";
import { ILoaderProps } from "./LoaderProps";

export const Loader = (props: ILoaderProps) => {
  const { size = 64 } = props;

  return (
    <div className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-black-3/40 z-20">
      <LoaderIcon size={size} className="animate-spin" />
    </div>
  );
};
