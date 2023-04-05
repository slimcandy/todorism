import React from "react";
import { ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { PrivateListPoints } from "./PrivateListPoints";
import { IAccessIds } from "../../../../../interfaces";
import { mockedPrivateListPointsApi } from "../../../../../api_clients";
import { accessIds } from "../../../../../utils";

export default {
  title: "components/listPoint/private/PrivateListPoints",
  component: PrivateListPoints,
  decorators: [withRouter],
  parameters: {
    mockData: Object.values(mockedPrivateListPointsApi),
  },
  args: {
    accessIds: accessIds as IAccessIds,
  },
};

const Template: ComponentStory<typeof PrivateListPoints> = (args) => (
  <PrivateListPoints {...args} />
);

export const Primary = Template.bind({});

export const Empty = Template.bind({});
Empty.parameters = {
  mockData: Object.values({
    ...mockedPrivateListPointsApi,
    getItems: { ...mockedPrivateListPointsApi.getItems, response: [] },
  }),
};
