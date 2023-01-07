import takenListPoint from "./listPoint/takenListPoint.json";
import access from "./accessIds/accessIds.json";
import privateListPoint from "./listPoint/privateListPoint.json";
import commonListPoint from "./listPoint/commonListPoint.json";
import membersJson from "./members/members.json";
import events from "./events/events.json";

const { takenListPointFromBE } = takenListPoint;
const { untakenListPointFromBE } = takenListPoint;
const { accessIds } = access;
const { privateListPointsFromBE } = privateListPoint;
const { commonListPointsFromBE, commonListPointBindingsFromBE } =
  commonListPoint;
const { members } = membersJson;
const { fullEvent } = events;

export {
  takenListPointFromBE,
  untakenListPointFromBE,
  accessIds,
  privateListPointsFromBE,
  commonListPointsFromBE,
  commonListPointBindingsFromBE,
  members,
  fullEvent,
};
