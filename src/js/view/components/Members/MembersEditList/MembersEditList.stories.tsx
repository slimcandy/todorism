import React from "react";
import { ComponentStory } from "@storybook/react";
import { MembersEditList } from "./MembersEditList";
import { members, accessIds } from "../../../../utils";

export default {
  title: "components/members/MembersEditList",
  component: MembersEditList,
  args: {
    actionContent: <div>Кнопка с действием</div>,
  },
};

const Template: ComponentStory<typeof MembersEditList> = (args) => (
  <MembersEditList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  list: members,
  accessIds,
};
