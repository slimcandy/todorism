import { TLocalStorageAccessIdsList } from "./types";
import { getLocalStorage, setLocalStorage } from "./localStorage";
import { localStorageAccessIdsList } from "./constants";
import { IAccessIds } from "../../interfaces";

export const getAccessIdsListFromLocalStorage =
  (): TLocalStorageAccessIdsList =>
    getLocalStorage<TLocalStorageAccessIdsList>(localStorageAccessIdsList) ||
    {};

export const getAccessEventsUidsFromLocalStorage = (): string[] =>
  Object.keys(getAccessIdsListFromLocalStorage());

export const pushAccessIdsInLocalStorage = (accessIds: IAccessIds) => {
  const list = getAccessIdsListFromLocalStorage();
  const { eventUid } = accessIds;

  if (eventUid) {
    list[eventUid] = accessIds;

    setLocalStorage<TLocalStorageAccessIdsList>(
      localStorageAccessIdsList,
      list
    );
  }
};

export const getEventAccessIds = (eventUid: string): IAccessIds | undefined =>
  getAccessIdsListFromLocalStorage()[eventUid];

export const deleteEventMemberUidFromLocalStorage = (eventUid: string) => {
  const accessIds = getAccessIdsListFromLocalStorage()[eventUid];

  if (accessIds) {
    pushAccessIdsInLocalStorage({
      ...accessIds,
      memberUid: "",
    });
  }
};
