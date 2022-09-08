import { getLocalStorage, setLocalStorage } from "./localStorage";
import { localStorageUsernameKey } from "./constants";

export const saveUsernameInLocalStorage = (name: string) => {
  setLocalStorage(localStorageUsernameKey, name);
};

export const getUsernameFromLocalStorage = () =>
  getLocalStorage(localStorageUsernameKey);
