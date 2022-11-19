import { getLocalStorage, setLocalStorage } from "./localStorage";
import { localStorageUsernameKey } from "./constants";

export const saveUserNameInLocalStorage = (name: string) => {
  setLocalStorage<string>(localStorageUsernameKey, name);
};

export const getUserNameFromLocalStorage = (): string | null =>
  getLocalStorage<string>(localStorageUsernameKey);
