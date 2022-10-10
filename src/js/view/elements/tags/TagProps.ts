import React from "react";

export interface TagProps {
  children: string;
  isActive?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
