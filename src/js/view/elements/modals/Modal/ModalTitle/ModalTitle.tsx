import React from "react";

import { IModalTitleProps } from "./ModalTitleProps";
import { TitleH2 } from "../../../typography";

export const ModalTitle = (props: IModalTitleProps) => {
  const { title } = props;

  return <TitleH2 className="text-light-4 pr-3 mb-3">{title}</TitleH2>;
};
