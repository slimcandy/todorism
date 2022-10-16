import React from "react";
import { ComponentStory } from "@storybook/react";

import { Modal } from "./Modal";

export default {
  title: "elements/Modal",
  component: Modal,
  args: {
    title: "Точно удалить участника?",
    description: "Это может затронуть других участников мероприятия",
  },
};

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

export const WithLongTitle = Template.bind({});
WithLongTitle.args = {
  title: "Точно удалить участника? Второго шанса уже не будет. Острожнее!",
};
