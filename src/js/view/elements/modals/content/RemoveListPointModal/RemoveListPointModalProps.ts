import { IListPoint } from "../../../../../interfaces";

export interface IRemoveListPointModal {
  listPointName: IListPoint["item"]["name"];
  showDeletionWarningMessage?: boolean;
  onRemoveClick: () => void;
  onCancelClick: () => void;
}
