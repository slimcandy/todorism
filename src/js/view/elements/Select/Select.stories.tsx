import React from "react";
import { ComponentStory } from "@storybook/react";
import { Select } from "./Select";

export default {
  title: "elements/select",
  component: Select,
  args: {
    options: ["Штуки", "Упаковки", "Граммы"],
    onChange: (option: string) => option,
  },
};

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "counter",
};
