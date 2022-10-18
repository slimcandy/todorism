import React from "react";
import { ComponentStory } from "@storybook/react";
import { rest } from "msw";
import { PrivateListPoints } from "./PrivateListPoints";
import {
  LIST_POINT_CATEGORIES,
  LIST_POINT_UNITS,
} from "../../../../../interfaces";
import { privateListPointApi } from "../../../../../api_clients";
import { getCurrentEventFromLocalStorage } from "../../../../../utils/localStorage";

const event = getCurrentEventFromLocalStorage();

const privateEndPoints = privateListPointApi({
  tripUid: event?.trip_uid || "",
  memberUid: event?.member_uid || "",
});

const list = Array(40).fill({
  pointUid: "123",
  item: {
    name: "Греча",
    tags: [LIST_POINT_CATEGORIES.food],
  },
  unit: LIST_POINT_UNITS.gram,
  count: "3",
});

export default {
  title: "components/listPoint/CommonListPoints",
  component: PrivateListPoints,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    layout: "fullscreen",
  },
  msw: {
    handlers: [
      rest.get(privateEndPoints.getItems, (req, res, ctx) =>
        res(ctx.delay(1500), ctx.json(list))
      ),
      rest.delete(privateEndPoints.removeItem, (req, res, ctx) =>
        res(ctx.delay(1500))
      ),
    ],
  },
};

const Template: ComponentStory<typeof PrivateListPoints> = () => (
  <div className="flex h-screen bg-light-4 dark:bg-black-0">
    <PrivateListPoints />
  </div>
);

export const Primary = Template.bind({});
