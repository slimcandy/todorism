import { PropsWithChildren } from "react";

type BtnType = JSX.IntrinsicElements["button"]["type"];

export interface BtnProps {
  children: PropsWithChildren<string>;
  type?: BtnType;
  disabled?: boolean;
  className?: string;
}
