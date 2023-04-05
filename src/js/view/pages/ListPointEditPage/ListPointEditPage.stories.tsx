import React from "react";
import { ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { ListPointEditPage } from "./ListPointEditPage";
import {
  ICommonListPoint,
  ICommonListPointFromBE,
  IListPoint,
  IPrivateListPointFromBE,
} from "../../../interfaces";
import {
  mockedPrivateListPointsApi,
  mockedCommonListPointsApi,
} from "../../../api_clients";
import {
  accessIds,
  privateListPointsFromBE,
  convertIPrivateListPointFromBEToIListPoint,
  getEmptyListPoint,
  commonListPointsFromBE,
  convertICommonListPointFromBEToIListPoint,
} from "../../../utils";
import {
  pushAccessIdsInLocalStorage,
  saveCurrentListPointInLocalStorage,
  saveListPointTypeInLocalStorage,
  TLocalStorageListPointTypes,
} from "../../../utils/localStorage";

const commonListPoint = convertICommonListPointFromBEToIListPoint(
  (commonListPointsFromBE as ICommonListPointFromBE[])[0]
);

const privateListPoint = convertIPrivateListPointFromBEToIListPoint(
  (privateListPointsFromBE as IPrivateListPointFromBE[])[0]
);

const emptyListPoint = getEmptyListPoint();

const initialLocalStorageState = ({
  type,
  listPoint,
}: {
  type: TLocalStorageListPointTypes;
  listPoint: IListPoint | ICommonListPoint;
}) => {
  pushAccessIdsInLocalStorage(accessIds);
  saveListPointTypeInLocalStorage(type);
  saveCurrentListPointInLocalStorage(listPoint);
  return Promise.resolve({});
};

export default {
  title: "pages/ListPointEditPage",
  component: ListPointEditPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/event/:eventUid/item",
      routeParams: { eventUid: accessIds.eventUid },
    },
  },
};

const Template: ComponentStory<typeof ListPointEditPage> = () => (
  <ListPointEditPage />
);

export const CreatePrimaryListPoint = Template.bind({});
CreatePrimaryListPoint.loaders = [
  () =>
    initialLocalStorageState({ type: "private", listPoint: emptyListPoint }),
];
CreatePrimaryListPoint.parameters = {
  mockData: Object.values(mockedPrivateListPointsApi),
};

export const CreateCommonListPoint = Template.bind({});
CreateCommonListPoint.loaders = [
  () => initialLocalStorageState({ type: "common", listPoint: emptyListPoint }),
];
CreateCommonListPoint.parameters = {
  mockData: Object.values(mockedCommonListPointsApi),
};

export const EditPrivateListPoint = Template.bind({});
EditPrivateListPoint.loaders = [
  () =>
    initialLocalStorageState({ type: "private", listPoint: privateListPoint }),
];
EditPrivateListPoint.parameters = {
  mockData: Object.values(mockedPrivateListPointsApi),
};

export const EditCommonListPoint = Template.bind({});
EditCommonListPoint.loaders = [
  () =>
    initialLocalStorageState({ type: "common", listPoint: commonListPoint }),
];
EditCommonListPoint.parameters = {
  mockData: Object.values(mockedCommonListPointsApi),
};
