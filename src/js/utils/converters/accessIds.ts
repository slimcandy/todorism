import { IAccessIdsFromBE, IAccessIds } from "../../interfaces";

export const convertIAccessIdsFromBEToIAccessIds = (
  accessIds: IAccessIdsFromBE
): IAccessIds => ({
  eventUid: accessIds.trip_uid,
  memberUid: accessIds.member_uid,
});
