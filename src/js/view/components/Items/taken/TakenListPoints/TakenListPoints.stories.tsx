import React from "react";
import { ComponentStory } from "@storybook/react";
import { TakenListPoints } from "./TakenListPoints";
import { mockedTakenListPointsApi } from "../../../../../api_clients";
import { takenListPointFromBE, accessIds } from "../../../../../utils";
import { IAccessIds, ITakenListPointFromBE } from "../../../../../interfaces";

export default {
  title: "components/listPoint/taken/TakenListPoints",
  component: TakenListPoints,
  parameters: {
    mockData: Object.values(mockedTakenListPointsApi),
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
    ...mockedTakenListPointsApi,
    getItems: { ...mockedTakenListPointsApi.getItems, response: [] },
  }),
};

export const TakenAll = Template.bind({});
TakenAll.parameters = {
  mockData: Object.values({
    ...mockedTakenListPointsApi,
    getItems: {
      ...mockedTakenListPointsApi.getItems,
      response: takenListPointFromBE as ITakenListPointFromBE[],
    },
  }),
};
