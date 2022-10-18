import React from "react";
import { ComponentStory } from "@storybook/react";
import { ListPointsWrapper } from "./ListPointsWrapper";
import {
  LIST_POINT_CATEGORIES,
  LIST_POINT_UNITS,
} from "../../../../interfaces";

export default {
  title: "components/ListPoint/ListPointsWrapper",
  component: ListPointsWrapper,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    layout: "fullscreen",
  },
};

const list = Array(40).fill({
  item: {
    name: "Греча",
    tags: [LIST_POINT_CATEGORIES.food],
  },
  unit: LIST_POINT_UNITS.gram,
  count: "3",
});

const Template: ComponentStory<typeof ListPointsWrapper> = (args) => (
  // <div className="position-relative flex h-screen bg-light-4 dark:bg-black-0">
  <ListPointsWrapper {...args} />
  // </div>
);

export const Primary = Template.bind({});
Primary.args = {
  listPoints: list,
};
