import React from "react";
import { ComponentStory } from "@storybook/react";
import { DeleteIcon } from "../../../icons";

import { Input } from "./Input";

export default {
  title: "elements/input",
  component: Input,
  argTypes: {
    icon: {
      options: ["deleteIcon"],
      mapping: {
        deleteIcon: <DeleteIcon size={20} />,
      },
    },
  },
  args: {
    label: "label text",
    placeholder: "placeholder text",
    inputId: "id",
  },
};

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: "deleteIcon",
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  icon: "deleteIcon",
  isIconLeft: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "disabled input",
  disabled: true,
};
