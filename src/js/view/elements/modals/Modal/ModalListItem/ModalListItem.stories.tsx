import React from "react";
import { ComponentStory } from "@storybook/react";

import { ModalListItem } from "./ModalListItem";
import { EditIcon } from "../../../../icons";

export default {
  title: "elements/Modal/ModalListItem",
  component: ModalListItem,
  args: {
    title: "Редактировать",
    icon: <EditIcon size={16} />,
  },
};

const Template: ComponentStory<typeof ModalListItem> = (args) => (
  <ModalListItem {...args} />
);

export const Primary = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
