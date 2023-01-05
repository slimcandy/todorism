import React from "react";
import { ComponentStory } from "@storybook/react";
import { TakenListPoints } from "./TakenListPoints";
import { takenListPointApi } from "../../../../../api_clients";
import {
  takenListPointFromBE,
  untakenListPointFromBE,
  accessIds,
} from "../../../../../utils";
import { IAccessIds, ITakenListPointFromBE } from "../../../../../interfaces";

const takenEndPoints = takenListPointApi({
  ...accessIds,
  pointUid: ":pointUid",
});

const mockedApi = {
  getItems: {
    url: takenEndPoints.getItems,
    method: "GET",
    status: 200,
    response: untakenListPointFromBE as ITakenListPointFromBE[],
    delay: 700,
  },
  takeItem: {
    url: takenEndPoints.takeItem,
    method: "PUT",
    status: 200,
    response: {},
    delay: 700,
  },
  untakeItem: {
    url: takenEndPoints.untakeItem,
    method: "PUT",
    status: 200,
    response: {},
    delay: 700,
  },
};

export default {
  title: "components/listPoint/taken/TakenListPoints",
  component: TakenListPoints,
  parameters: {
    mockData: Object.values(mockedApi),
  },
  args: {
    accessIds: accessIds as IAccessIds,
  },
};

const Template: ComponentStory<typeof TakenListPoints> = (args) => (
  <TakenListPoints {...args} />
);

export const Primary = Template.bind({});

export const Empty = Template.bind({});
Empty.parameters = {
  mockData: Object.values({
    ...mockedApi,
    getItems: { ...mockedApi.getItems, response: [] },
  }),
};

export const TakenAll = Template.bind({});
TakenAll.parameters = {
  mockData: Object.values({
    ...mockedApi,
    getItems: {
      ...mockedApi.getItems,
      response: takenListPointFromBE as ITakenListPointFromBE[],
    },
  }),
};
