import { IAccessIds } from "../../../../interfaces";
import { LIST_POINT_TYPES } from "../../../../common/constants";

export type TEventCardListPointTypes = Exclude<
  keyof typeof LIST_POINT_TYPES,
  "recommended"
>;

export interface IEventListPointsTabsProps {
  accessIds: IAccessIds;
}
