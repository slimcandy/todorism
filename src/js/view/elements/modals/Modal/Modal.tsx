import React, { KeyboardEvent, MouseEvent } from "react";

import { IModalProps } from "./ModalProps";
import { BtnIcon } from "../../buttons";
import { CloseIcon } from "../../../icons";
import { ModalTitle } from "./ModalTitle/ModalTitle";
import { ModalDescription } from "./ModalDescription/ModalDescription";

export const Modal = (props: IModalProps) => {
  const { title, description, content, onShow } = props;

  const handleShowing = (
    e:
      | KeyboardEvent<HTMLDivElement>
      | MouseEvent<HTMLButtonElement | HTMLDivElement>,
    show: boolean
  ) => {
    onShow(show);
    e.stopPropagation();
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Escape") {
      handleShowing(e, false);
    }
  };

  return (
    <div
      className="flex justify-center items-end absolute top-0 bottom-0 left-0 right-0 bg-black-3/40 z-10 cursor-default"
      role="button"
      tabIndex={0}
      onClick={(e) => handleShowing(e, false)}
      onKeyDown={(e) => handleKeyPress(e)}
    >
      <div className="flex flex-col w-full fixed bottom-0 bg-black-0 p-6 gap-y-6 text-center border-none rounded-t-3xl">
        <BtnIcon
          icon={<CloseIcon size={24} />}
          onClick={(e) => handleShowing(e, false)}
          className="btn-sm absolute right-2 top-2"
        />

        {title && <ModalTitle title={title} />}

        {description && <ModalDescription description={description} />}

        {content}
      </div>
    </div>
  );
};
