export type TLocalStorage = { [key: string]: string };
export type TLocalStorageParsedData = string | object | null;
export type TLocalStorageEvents = Array<ILocaleStorageEvent>;

export interface ILocaleStorageEvent {
  trip_uid: string;
  member_uid: string;
}
