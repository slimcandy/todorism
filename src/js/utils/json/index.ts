import takenListPoint from "./listPoint/takenListPoint.json";
import access from "./accessIds/accessIds.json";
import privateListPoint from "./listPoint/privateListPoint.json";
import commonListPoint from "./listPoint/commonListPoint.json";

const { takenListPointFromBE } = takenListPoint;
const { untakenListPointFromBE } = takenListPoint;
const { accessIds } = access;
const { privateListPointsFromBE } = privateListPoint;
const { commonListPointsFromBE, commonListPointBindingsFromBE } =
  commonListPoint;

export {
  takenListPointFromBE,
  untakenListPointFromBE,
  accessIds,
  privateListPointsFromBE,
  commonListPointsFromBE,
  commonListPointBindingsFromBE,
};
