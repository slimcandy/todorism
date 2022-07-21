import React from "react";
import { Ellipse } from "./Ellipse";

type Props = {
  imgSrc: string,
  imgWidth?: number,
  altText?: string,
  bgSize?: number
}

export const EllipseWithImg = (props: Props) => {
  const { imgSrc, imgWidth = 122, bgSize = 197, altText = "" } = props;
  return (
    <div className="relative">
      <Ellipse size={bgSize} />
      <img src={imgSrc} style={{ width: imgWidth }}
           alt={altText}
           className="absolute
           top-1/3 left-1/2
           transform
           -translate-x-1/2
           -translate-y-1/2" />
    </div>
  );
};