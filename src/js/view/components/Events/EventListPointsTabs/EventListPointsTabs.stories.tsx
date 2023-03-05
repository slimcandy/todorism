import React from "react";
import { ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { accessIds } from "../../../../utils";
import { IAccessIds } from "../../../../interfaces";

import { EventListPointsTabs } from "./EventListPointsTabs";
import {
  mockedCommonListPointsApi,
  mockedPrivateListPointsApi,
  mockedTakenListPointsApi,
} from "../../../../api_clients";

const { getItems: getCommonItems } = mockedCommonListPointsApi;
const { getItems: getPrivateItems } = mockedPrivateListPointsApi;
const {
  getItems: getTakenItems,
  takeItem,
  untakeItem,
} = mockedTakenListPointsApi;

export default {
  title: "components/events/EventListPointsTabs",
  component: EventListPointsTabs,
  decorators: [withRouter],
  parameters: {
    mockData: [
      getCommonItems,
      getPrivateItems,
      getTakenItems,
      takeItem,
      untakeItem,
    ],
  },
  args: {
    accessIds: accessIds as IAccessIds,
  },
};

const Template: ComponentStory<typeof EventListPointsTabs> = (args) => (
  <EventListPointsTabs {...args} />
);

export const Primary = Template.bind({});
