import { IListPoint } from "../../../../../interfaces";

export interface IListPointActionModal {
  listPointName: IListPoint["item"]["name"];
  showDeletionWarningMessage?: boolean;
  onEditClick: () => void;
  onRemoveClick: () => void;
}
