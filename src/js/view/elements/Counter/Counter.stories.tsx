import React from "react";
import { ComponentStory } from "@storybook/react";
import { Counter } from "./Counter";

export default {
  title: "elements/Counter",
  component: Counter,
  args: {
    value: 3,
  },
};

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Primary = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "counter",
};
