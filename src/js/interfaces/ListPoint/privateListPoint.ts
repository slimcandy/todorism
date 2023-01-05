import { IListPointFromBE } from "./ListPoint";

// Backend models
export interface IPrivateListPointFromBE {
  point_uid: string;
  member_uid: string;
  count: number;
  is_taken: boolean;
  point: IListPointFromBE;
}
