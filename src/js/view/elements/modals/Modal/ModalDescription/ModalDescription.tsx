import React from "react";

import { IModalDescriptionProps } from "./ModalDescriptionProps";
import { TextBodyMedium } from "../../../typography";

export const ModalDescription = (props: IModalDescriptionProps) => {
  const { description } = props;

  return <TextBodyMedium className="text-dark-3">{description}</TextBodyMedium>;
};
