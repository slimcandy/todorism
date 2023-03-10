import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  useMemo,
} from "react";

interface ILoadingContext {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext<ILoadingContext>({
  loading: true,
  setLoading: () => false,
});

export const LoadingProvider = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const value = useMemo(
    () => ({
      loading,
      setLoading,
    }),
    [loading, setLoading]
  );

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
