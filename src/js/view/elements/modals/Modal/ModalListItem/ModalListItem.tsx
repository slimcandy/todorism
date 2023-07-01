import React from "react";

import { IModalListItemProps } from "./ModalListItemProps";

import { ButtonTransparent } from "../../../buttons";

export const ModalListItem = (props: IModalListItemProps) => {
  const { title, icon, disabled = false, onClick } = props;

  return (
    <ButtonTransparent
      className="px-0"
      icon={icon}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </ButtonTransparent>
  );
};
