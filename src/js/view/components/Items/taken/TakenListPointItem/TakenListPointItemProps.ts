import { ITakenListPoint } from "../../../../../interfaces";

export interface TakenListPointItemProps {
  listPoint: ITakenListPoint;
  onCheck: () => void;
}
