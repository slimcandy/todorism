import {
  commonListPointBindingsFromBE,
  commonListPointsFromBE,
  accessIds,
} from "../../../utils";
import {
  ICommonListPointFromBE,
  IListPointBindingFromBE,
} from "../../../interfaces";
import { commonListPointApi } from "../../listPoint";

const status = 200;
const delay = 700;

const commonEndPoints = commonListPointApi({
  eventUid: accessIds.eventUid,
  pointUid: ":pointUid",
});

export const mockedCommonListPointsApi = {
  addItem: {
    url: commonEndPoints.addItem,
    method: "POST",
    status,
    response: [],
    delay,
  },
  editItem: {
    url: commonEndPoints.editItem,
    method: "POST",
    status,
    response: [],
    delay,
  },
  getItems: {
    url: commonEndPoints.getItems,
    method: "POST",
    status,
    response: commonListPointsFromBE as ICommonListPointFromBE[],
    delay,
  },
  lockItem: {
    url: commonEndPoints.lockItem,
    method: "POST",
    status: 201,
    response: [],
    delay,
  },
  unlockItem: {
    url: commonEndPoints.unlockItem,
    method: "DELETE",
    status,
    response: [],
    delay,
  },
  bindItem: {
    url: commonEndPoints.bindItem,
    method: "POST",
    status,
    response: [],
    delay,
  },
  unbindItem: {
    url: commonEndPoints.unbindItem,
    method: "DELETE",
    status,
    response: [],
    delay,
  },
  deleteItem: {
    url: commonEndPoints.deleteItem,
    method: "DELETE",
    status,
    response: [],
    delay,
  },
  getMemberBindings: {
    url: commonEndPoints.getMemberBindings,
    method: "GET",
    status,
    response: commonListPointBindingsFromBE as IListPointBindingFromBE[],
    delay,
  },
};
