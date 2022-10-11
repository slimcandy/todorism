import React from "react";
import { ComponentStory } from "@storybook/react";
import { ListPointEditForm } from "./ListPointEditForm";
import {
  LIST_POINT_CATEGORIES,
  LIST_POINT_UNITS,
} from "../../../../interfaces";

export default {
  title: "elements/forms/itemEdit",
  component: ListPointEditForm,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

const Template: ComponentStory<typeof ListPointEditForm> = (args) => (
  <ListPointEditForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  listPoint: {
    item: {
      name: "Греча",
      tags: [LIST_POINT_CATEGORIES.food],
    },
    unit: LIST_POINT_UNITS.gram,
    count: "3",
  },
};
