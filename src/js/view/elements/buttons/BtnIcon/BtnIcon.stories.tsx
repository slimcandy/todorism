import React from "react";
import { ComponentStory } from "@storybook/react";

import { BtnIcon } from "./BtnIcon";
import { CloseIcon } from "../../../icons";

export default {
  title: "elements/buttons/BtnIcon",
  component: BtnIcon,
  args: {
    icon: <CloseIcon size={32} />,
  },
};

const Template: ComponentStory<typeof BtnIcon> = (args) => (
  <BtnIcon {...args} />
);

export const Primary = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  className: "btn-xs",
  icon: <CloseIcon size={16} />,
};
