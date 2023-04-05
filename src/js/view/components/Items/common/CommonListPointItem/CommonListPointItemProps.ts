import { ICommonListPoint } from "../../../../../interfaces";

export interface ICommonListPointItemProps {
  listPoint: ICommonListPoint;
  memberUid: string;
  loading?: boolean;
  onBindListPoint: () => void;
  onShowListPointSettings: () => void;
  onClickTitle?: () => void;
}
