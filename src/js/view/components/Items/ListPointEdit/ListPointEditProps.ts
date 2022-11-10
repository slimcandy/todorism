import { IListPoint } from "../../../../interfaces";
import { ILocaleStorageEvent } from "../../../../utils/localStorage";

export interface IListPointEditProps {
  listPoint: IListPoint;
  isCreationMode: boolean;
  onClick: (event: ILocaleStorageEvent, listPoint: IListPoint) => void;
}
