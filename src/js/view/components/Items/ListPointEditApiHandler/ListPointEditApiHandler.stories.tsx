import React from "react";
import { ComponentStory } from "@storybook/react";
import { rest } from "msw";
import { ListPointEditApiHandler } from "./ListPointEditApiHandler";
import {
  LIST_POINT_CATEGORIES,
  LIST_POINT_UNITS,
} from "../../../../interfaces";
import {
  commonListPointApi,
  privateListPointApi,
} from "../../../../api_clients";
import { getCurrentEventFromLocalStorage } from "../../../../utils/localStorage";

const listPoint = {
  pointUid: "baf152f2-96db-449f-8b40-a817864e372e",
  item: {
    name: "Аспирин",
    tags: [LIST_POINT_CATEGORIES.medicines],
  },
  unit: LIST_POINT_UNITS.piece,
  count: "3",
};

const commonEndPoints = commonListPointApi(
  getCurrentEventFromLocalStorage()?.trip_uid || ""
);
const privateEndPoints = privateListPointApi(
  getCurrentEventFromLocalStorage()?.trip_uid || ""
);
const mockedEndpoints = [
  commonEndPoints.addItem,
  commonEndPoints.editItem,
  privateEndPoints.addItem,
  privateEndPoints.editItem,
];

export default {
  title: "components/listPoint/ListPointEditApiHandler",
  component: ListPointEditApiHandler,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    msw: {
      handlers: [
        mockedEndpoints.map((mockedEndpoint) =>
          rest.post(mockedEndpoint, (req, res, ctx) => res(ctx.delay(1500)))
        ),
      ],
    },
    layout: "fullscreen",
  },
  args: {
    accessIds: {
      trip_uid: "b1685c01-8f84-499c-a59f-ffbec4d34bd3",
      member_uid: "39847088-6223-44d1-9874-62e1ad1e3277",
    },
  },
};

const Template: ComponentStory<typeof ListPointEditApiHandler> = (args) => (
  <div className="flex h-screen bg-light-4 dark:bg-black-0">
    <ListPointEditApiHandler {...args} />
  </div>
);

export const CreateCommonListPoint = Template.bind({});
CreateCommonListPoint.args = {
  listPointType: "common",
};

export const CreatePrivateListPoint = Template.bind({});
CreatePrivateListPoint.args = {
  listPointType: "private",
};

export const EditCommonListPoint = Template.bind({});
EditCommonListPoint.args = {
  listPointType: "common",
  listPointIndex: 0,
  listPoint,
};

export const EditPrivateListPoint = Template.bind({});
EditPrivateListPoint.args = {
  listPointType: "private",
  listPointIndex: 0,
  listPoint,
};
