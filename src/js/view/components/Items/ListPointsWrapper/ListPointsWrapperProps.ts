export interface IListPointsWrapperProps<T> {
  listPointItem: (listPoint: T, index: number) => JSX.Element;
  listPoints: Array<T>;
  onCreateListPoint?: () => void;
  customActionPanel?: JSX.Element;
  title?: JSX.Element;
}
