import { PropsWithChildren } from "react";

type BtnType = JSX.IntrinsicElements["button"]["type"];

export interface BtnProps {
  children: PropsWithChildren<string>;
  icon?: JSX.Element;
  type?: BtnType;
  disabled?: boolean;
  className?: string;
  textClassName?: string;
}
