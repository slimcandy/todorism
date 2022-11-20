import type { TLocalStorage } from "./types";

const localStorage: TLocalStorage | null = window ? window.localStorage : null;

export const getLocalStorage = <T>(key: string): T | null => {
  let storage = null;

  if (localStorage && key && localStorage[key]) {
    storage = JSON.parse(localStorage[key]) as T;
  }

  return storage;
};

export const setLocalStorage = <T>(key: string, data: T) => {
  if (localStorage) {
    localStorage[key] = JSON.stringify(data);
  }
};

export const deleteLocalStorage = (key: string) => {
  window?.localStorage.removeItem(key);
};
