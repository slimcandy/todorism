import { ReactNode } from "react";

export enum FontWeights {
  "extralight" = "extralight",
  "light" = "light",
  "normal" = "normal",
  "medium" = "medium",
  "semibold" = "semibold",
  "bold" = "bold",
  "extrabold" = "extrabold",
}

export type TFontWeights = keyof typeof FontWeights;

export interface TypographyProps {
  children: ReactNode;
  className?: string;
  fontWeight?: TFontWeights;
}
