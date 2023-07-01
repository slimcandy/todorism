import React, { KeyboardEvent, MouseEvent } from "react";

import { IModalProps } from "./ModalProps";
import { BtnIcon } from "../../buttons";
import { CloseIcon } from "../../../icons";
import { ModalTitle } from "./ModalTitle/ModalTitle";
import { ModalDescription } from "./ModalDescription/ModalDescription";

export const Modal = (props: IModalProps) => {
  const { title, description, content, onClose } = props;

  const closeModal = (
    e:
      | KeyboardEvent<HTMLDivElement>
      | MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    onClose();
    e.stopPropagation();
  };

  return (
    <div
      className="flex justify-center items-end absolute top-0 bottom-0 left-0 right-0 bg-black-3/40 z-10 cursor-default"
      role="button"
      tabIndex={0}
      onClick={(e) => closeModal(e)}
      onKeyDown={() => {}}
    >
      <div
        role="button"
        tabIndex={0}
        className="flex flex-col w-full fixed bottom-0 bg-black-0 p-6 gap-y-6 text-center border-none rounded-t-3xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => {}}
      >
        <BtnIcon
          icon={<CloseIcon size={24} />}
          onClick={(e) => closeModal(e)}
          className="btn-sm absolute right-2 top-2"
        />

        {title && <ModalTitle title={title} />}

        {description && <ModalDescription description={description} />}

        {content}
      </div>
    </div>
  );
};
