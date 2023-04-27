import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { IModalProps } from "../view/elements/modals/Modal/ModalProps";

interface IModalContext extends Partial<IModalProps> {
  setContent: Dispatch<SetStateAction<IModalProps | undefined>>;
}

const ModalContext = createContext<IModalContext>({
  setContent: () => undefined,
});

export const ModalProvider = ({ children }: { children: JSX.Element }) => {
  const [data, setContent] = useState<IModalProps>();

  const value = useMemo(
    () => ({
      ...data,
      setContent,
    }),
    [data]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
