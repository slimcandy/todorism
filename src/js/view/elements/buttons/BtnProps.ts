import React, { PropsWithChildren } from "react";

type BtnType = JSX.IntrinsicElements["button"]["type"];

export interface BtnProps {
  children: PropsWithChildren<string>;
  icon?: React.ReactNode;
  type?: BtnType;
  disabled?: boolean;
  className?: string;
}
