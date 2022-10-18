import { IListPoint } from "../../../../../interfaces";

export interface IRecommendationListPointEditProps {
  listPoint: IListPoint;
  listPointIndex?: number;
  onFinish: () => void;
}
