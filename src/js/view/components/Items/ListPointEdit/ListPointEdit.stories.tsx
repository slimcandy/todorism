import React from "react";
import { ComponentStory } from "@storybook/react";
import { ListPointEdit } from "./ListPointEdit";
import {
  LIST_POINT_CATEGORIES,
  LIST_POINT_UNITS,
} from "../../../../interfaces";

export default {
  title: "components/ListPoint/ListPointEdit",
  component: ListPointEdit,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    layout: "fullscreen",
  },
};

const Template: ComponentStory<typeof ListPointEdit> = (args) => (
  <div className="flex h-screen bg-light-4 dark:bg-black-0">
    <ListPointEdit {...args} />
  </div>
);

export const CreateMode = Template.bind({});
CreateMode.args = {
  isCreationMode: true,
};

export const EditMode = Template.bind({});
EditMode.args = {
  listPoint: {
    item: {
      name: "Греча",
      tags: [LIST_POINT_CATEGORIES.food],
    },
    unit: LIST_POINT_UNITS.gram,
    count: "3",
  },
};
