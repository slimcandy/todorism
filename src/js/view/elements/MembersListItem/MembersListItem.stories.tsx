import React from "react";
import { ComponentStory } from "@storybook/react";
import { MembersListItem } from "./MembersListItem";

export default {
  title: "elements/MembersListItem",
  component: MembersListItem,
  args: {
    actionContent: <div>Кнопка с действием</div>,
  },
};

const Template: ComponentStory<typeof MembersListItem> = (args) => (
  <MembersListItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: "Ваня",
};

export const WithLongName = Template.bind({});
WithLongName.args = {
  name: "Очень очень очень длинный Ваня",
};
