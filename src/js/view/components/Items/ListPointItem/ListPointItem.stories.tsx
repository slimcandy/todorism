import React from "react";
import { ComponentStory } from "@storybook/react";
import { ListPointItem } from "./ListPointItem";

export default {
  title: "components/listPoint/ListPointItem",
  component: ListPointItem,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    layout: "fullscreen",
  },
  args: {
    listPointName: "Газовая горелка",
    content: <div>listPoint content</div>,
  },
};

const Template: ComponentStory<typeof ListPointItem> = (args) => (
  <ListPointItem {...args} />
);

export const Primary = Template.bind({});
