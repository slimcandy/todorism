import React from "react";
import { ComponentStory } from "@storybook/react";
import { PrivateListPointItem } from "./PrivateListPointItem";
import {
  LIST_POINT_CATEGORIES,
  LIST_POINT_UNITS,
} from "../../../../../interfaces";

const listPoint = {
  item: {
    name: "Греча",
    tags: [LIST_POINT_CATEGORIES.food],
  },
  unit: LIST_POINT_UNITS.gram,
  count: "300",
};

export default {
  title: "components/listPoint/CommonListPointItem",
  component: PrivateListPointItem,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    layout: "fullscreen",
  },
  args: {
    listPoint,
  },
};

const Template: ComponentStory<typeof PrivateListPointItem> = (args) => (
  <PrivateListPointItem {...args} />
);

export const Primary = Template.bind({});

export const WithLongName = Template.bind({});
WithLongName.args = {
  listPoint: {
    ...listPoint,
    item: {
      ...listPoint.item,
      name: "Очень теплый пуховый спальник",
    },
    count: "1",
    unit: "piece",
  },
};
