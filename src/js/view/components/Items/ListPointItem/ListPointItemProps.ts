import { IListPoint } from "../../../../interfaces";

export interface IListPointItemProps {
  listPointName: IListPoint["item"]["name"];
  content: JSX.Element;
  grayTitle?: boolean;
  isButton?: boolean;
  outerContent?: JSX.Element;
  onClickTitle?: () => void;
}
