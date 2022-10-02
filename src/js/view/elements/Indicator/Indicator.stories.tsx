import React from "react";
import { ComponentStory } from "@storybook/react";

import { Indicator } from "./Indicator";

export default {
  title: "elements/indicator",
  component: Indicator,
};

const Template: ComponentStory<typeof Indicator> = (args) => (
  <Indicator {...args} />
);

export const Primary = Template.bind({});

export const Active = Template.bind({});
Active.args = {
  isActive: true,
};
