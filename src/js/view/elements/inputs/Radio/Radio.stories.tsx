import React from "react";
import { ComponentStory } from "@storybook/react";

import { Radio } from "./Radio";

export default {
  title: "elements/inputs/Radio",
  component: Radio,
};

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  name: "radio",
  value: true,
};
