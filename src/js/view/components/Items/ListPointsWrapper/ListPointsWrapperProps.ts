import {
  ICommonListPoint,
  IListPoint,
  ITakenListPoint,
  LIST_POINT_CATEGORIES,
} from "../../../../interfaces";

export type TGroupedListPoints<T> = {
  [key in string]?: T[];
};

export interface IListPointsWrapperProps<T> {
  listPointItem: (
    listPoint: T,
    // listPoint: IListPoint | ITakenListPoint,
    index: number
  ) => JSX.Element;
  listPoints: IListPoint[];
  onCreateListPoint: (category?: string) => void;
  customActionPanel?: JSX.Element;
  title?: JSX.Element;
  disableCategoryAddButton?: boolean;
}
