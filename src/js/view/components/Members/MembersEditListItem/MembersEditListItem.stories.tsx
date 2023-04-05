import React from "react";
import { ComponentStory } from "@storybook/react";
import { MembersEditListItem } from "./MembersEditListItem";

export default {
  title: "components/members/MembersEditListItem",
  component: MembersEditListItem,
  args: {
    actionContent: <div>Кнопка с действием</div>,
  },
};

const Template: ComponentStory<typeof MembersEditListItem> = (args) => (
  <MembersEditListItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  memberName: "Ваня",
  isMe: true,
};

export const WithLongName = Template.bind({});
WithLongName.args = {
  memberName: "Очень очень очень длинный Ваня",
  isMe: true,
};
