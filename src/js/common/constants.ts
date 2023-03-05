// URLs
export const url = "http://localhost:3001/";
export const urlApi = `${url}/api/`;
export const urlApiGet = `${urlApi}v1/get-`;
export const urlApiSet = `${urlApi}v1/set-`;
export const localStorageUsernameKey = "nickname";
export const localStorageTripIdKey = "trip_ids";
export const SERVER_URL =
  process.env.REACT_APP_SERVER || "https://tracking-organizer.herokuapp.com";

// Elements
export const langLocales = [
  {
    id: 1,
    title: "Русский",
    lang: "ru",
  },
  {
    id: 2,
    title: "English",
    lang: "en",
  },
];

export enum LIST_POINT_TYPES {
  "recommended" = "recommended",
  "private" = "private",
  "common" = "common",
  "taken" = "taken",
}
