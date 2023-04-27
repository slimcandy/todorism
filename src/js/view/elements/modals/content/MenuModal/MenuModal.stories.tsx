import React from "react";
import { ComponentStory } from "@storybook/react";

import { MenuModal } from "./MenuModal";
import { Modal } from "../../Modal/Modal";

export default {
  title: "elements/Modal/content/MenuModal",
  component: MenuModal,
};

const Template: ComponentStory<typeof MenuModal> = (args) => (
  <Modal onClose={() => {}} content={<MenuModal {...args} />} />
);

export const Primary = Template.bind({});
