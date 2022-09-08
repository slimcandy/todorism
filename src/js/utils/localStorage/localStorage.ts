import type { TLocalStorage, TLocalStorageParsedData } from "./types";

const localStorage: TLocalStorage | null = window ? window.localStorage : null;

export const getLocalStorage = (key: string) => {
  let storage: TLocalStorageParsedData = null;

  if (localStorage && key) {
    storage = JSON.parse(localStorage[key]) as TLocalStorageParsedData;
  }

  return storage;
};

export const setLocalStorage = (key: string, data: TLocalStorageParsedData) => {
  if (localStorage) {
    localStorage[key] = JSON.stringify(data);
  }
};
