import { IListPoint } from "../../../../../interfaces";
import { ILocaleStorageEvent } from "../../../../../utils/localStorage";

export interface IRecommendationListPointEditProps {
  listPoint: IListPoint;
  listPointIndex?: number;
  onClick: (
    event: ILocaleStorageEvent,
    listPoint: IListPoint,
    listPointIndex?: number
  ) => void;
}
