import { IListPoint, LIST_POINT_CATEGORIES } from "../../../../interfaces";

export type TGroupedListPoints = {
  [key in LIST_POINT_CATEGORIES]?: IGroupedListPointObject[];
};

export interface IGroupedListPointObject {
  positionIndex: number;
  listPoint: IListPoint;
}

export interface IListPointsWrapperProps {
  listPointItem: (index: number) => JSX.Element;
  listPoints: IListPoint[];
  onCreateListPoint?: (category?: LIST_POINT_CATEGORIES) => void;
  customActionPanel?: JSX.Element;
  title?: JSX.Element;
  disableCategoryAddButton?: boolean;
}
