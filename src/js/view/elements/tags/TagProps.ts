import React from "react";

export interface TagProps {
  children: string;
  isActive?: boolean;
  isButton?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
