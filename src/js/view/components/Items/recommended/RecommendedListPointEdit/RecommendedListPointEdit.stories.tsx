import React from "react";
import { ComponentStory } from "@storybook/react";
import { RecommendedListPointEdit } from "./RecommendedListPointEdit";
import {
  LIST_POINT_CATEGORIES,
  LIST_POINT_UNITS,
} from "../../../../../interfaces";

export default {
  title: "components/listPoint/RecommendedListPoints",
  component: RecommendedListPointEdit,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    layout: "fullscreen",
  },
};

const Template: ComponentStory<typeof RecommendedListPointEdit> = (args) => (
  <div className="flex h-screen bg-light-4 dark:bg-black-0">
    <RecommendedListPointEdit {...args} />
  </div>
);

export const CreateMode = Template.bind({});

export const EditMode = Template.bind({});
EditMode.args = {
  listPointIndex: 0,
  listPoint: {
    item: {
      name: "Греча",
      tags: [LIST_POINT_CATEGORIES.food],
    },
    unit: LIST_POINT_UNITS.gram,
    count: "3",
  },
};
