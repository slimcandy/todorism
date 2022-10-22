import { IListPoint } from "../../../../../interfaces";

export interface IListPointActionModal {
  listPointName: IListPoint["item"]["name"];
  onShareClick: () => void;
  onLogoutClick: () => void;
}
