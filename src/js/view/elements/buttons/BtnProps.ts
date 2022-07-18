import React, { PropsWithChildren, RefObject } from "react";

type BtnType = JSX.IntrinsicElements["button"]["type"];

export type BtnProps = {
  children: PropsWithChildren<string>;
  icon?: JSX.Element;
  type?: BtnType;
  disabled?: boolean;
  className?: string;
  buttonRef?: RefObject<HTMLButtonElement>;
} & Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "lang"
>;
