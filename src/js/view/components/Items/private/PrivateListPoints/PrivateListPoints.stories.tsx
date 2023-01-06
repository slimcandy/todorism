import React from "react";
import { ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { PrivateListPoints } from "./PrivateListPoints";
import { IAccessIds, IPrivateListPointFromBE } from "../../../../../interfaces";
import { privateListPointApi } from "../../../../../api_clients";
import { privateListPointsFromBE, accessIds } from "../../../../../utils";

const privateEndPoints = privateListPointApi({
  ...accessIds,
  pointUid: ":pointUid",
});

const mockedApi = {
  getItems: {
    url: privateEndPoints.getItems,
    method: "GET",
    status: 200,
    response: privateListPointsFromBE as IPrivateListPointFromBE[],
    delay: 700,
  },
  removeItem: {
    url: privateEndPoints.removeItem,
    method: "DELETE",
    status: 200,
    response: [],
    delay: 700,
  },
};

export default {
  title: "components/listPoint/private/PrivateListPoints",
  component: PrivateListPoints,
  decorators: [withRouter],
  parameters: {
    mockData: Object.values(mockedApi),
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
    ...mockedApi,
    getItems: { ...mockedApi.getItems, response: [] },
  }),
};
