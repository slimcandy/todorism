import { getLocalStorage, setLocalStorage } from "../../../utils/localStorage";
import { IListPoint } from "../../../interfaces";

export type TLocalStorageListPoints = Array<IListPoint>;

export const localStorageRecommendedListPoints = "recommendedListPoints";

export const getRecommendedListPointsFromLocalStorage =
  (): TLocalStorageListPoints => {
    const listPoints = getLocalStorage<TLocalStorageListPoints>(
      localStorageRecommendedListPoints
    );
    return listPoints && Array.isArray(listPoints) ? listPoints : [];
  };

export const saveRecommendedListPointsInLocalStorage = (
  listPoints: TLocalStorageListPoints
) => {
  setLocalStorage<TLocalStorageListPoints>(
    localStorageRecommendedListPoints,
    listPoints
  );
};

export const pushListPointToLocalStorageRecommendedListPoints = (
  listPoint: IListPoint
) => {
  const listPoints = getRecommendedListPointsFromLocalStorage();

  listPoints.push(listPoint);
  saveRecommendedListPointsInLocalStorage(listPoints);
};

export const replaceListPointToLocalStorageRecommendedListPoints = (
  index: number,
  listPoint: IListPoint
) => {
  const listPoints = getRecommendedListPointsFromLocalStorage();

  listPoints.splice(index, 1, listPoint);
  saveRecommendedListPointsInLocalStorage(listPoints);
};

export const deleteListPointFromLocalStorageRecommendedListPoints = (
  index: number
) => {
  const listPoints = getRecommendedListPointsFromLocalStorage();

  listPoints.splice(index, 1);
  saveRecommendedListPointsInLocalStorage(listPoints);
};
