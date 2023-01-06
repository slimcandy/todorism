import React from "react";
import { ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { CommonListPoints } from "./CommonListPoints";
import { commonListPointApi } from "../../../../../api_clients";
import { accessIds } from "../../../../../utils/json/accessIds/accessIds.json";
import {
  IAccessIds,
  ICommonListPointFromBE,
  IListPointBindingFromBE,
} from "../../../../../interfaces";
import {
  commonListPointsFromBE,
  commonListPointBindingsFromBE,
} from "../../../../../utils";

const commonEndPoints = commonListPointApi({
  eventUid: accessIds.eventUid,
  pointUid: ":pointUid",
});

const mockedApi = {
  getItems: {
    url: commonEndPoints.getItems,
    method: "POST",
    status: 200,
    response: commonListPointsFromBE as ICommonListPointFromBE[],
    delay: 700,
  },
  lockItem: {
    url: commonEndPoints.lockItem,
    method: "POST",
    status: 201,
    response: [],
    delay: 700,
  },
  unlockItem: {
    url: commonEndPoints.unlockItem,
    method: "DELETE",
    status: 200,
    response: [],
    delay: 700,
  },
  bindItem: {
    url: commonEndPoints.bindItem,
    method: "POST",
    status: 200,
    response: [],
    delay: 700,
  },
  unbindItem: {
    url: commonEndPoints.unbindItem,
    method: "DELETE",
    status: 200,
    response: [],
    delay: 700,
  },
  deleteItem: {
    url: commonEndPoints.deleteItem,
    method: "DELETE",
    status: 200,
    response: [],
    delay: 700,
  },
  getMemberBindings: {
    url: commonEndPoints.getMemberBindings,
    method: "GET",
    status: 200,
    response: commonListPointBindingsFromBE as IListPointBindingFromBE[],
    delay: 700,
  },
};

export default {
  title: "components/listPoint/common/CommonListPoints",
  component: CommonListPoints,
  decorators: [withRouter],
  parameters: {
    mockData: Object.values(mockedApi),
  },
  args: {
    accessIds: accessIds as IAccessIds,
  },
};

const Template: ComponentStory<typeof CommonListPoints> = (args) => (
  <CommonListPoints {...args} />
);

export const Primary = Template.bind({});

export const Locked = Template.bind({});
Locked.parameters = {
  mockData: Object.values({
    ...mockedApi,
    lockItem: { ...mockedApi.lockItem, status: 423 },
  }),
};

export const GetNewBindings = Template.bind({});
GetNewBindings.parameters = {
  mockData: Object.values({
    ...mockedApi,
    getItems: {
      ...mockedApi.getItems,
      response: [{ ...commonListPointsFromBE[0], bindings: [] }],
    },
  }),
};

export const EmptyBindings = Template.bind({});
EmptyBindings.parameters = {
  mockData: Object.values({
    ...mockedApi,
    getMemberBindings: {
      ...mockedApi.getMemberBindings,
      response: [],
    },
  }),
};
