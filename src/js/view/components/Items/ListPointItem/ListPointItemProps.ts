import { IListPoint } from "../../../../interfaces";

export interface IListPointItemProps {
  listPointName: IListPoint["item"]["name"];
  content: JSX.Element;
  onClick?: () => void;
}
