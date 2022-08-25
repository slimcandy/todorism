import React from "react";

type BtnType = JSX.IntrinsicElements["button"]["type"];

export type BtnIconProps = {
  icon: JSX.Element;
  type?: BtnType;
  disabled?: boolean;
  className?: string;
} & Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  ""
>;
