import React from "react";
import { ComponentStory } from "@storybook/react";

import { BlockedListPointModal } from "./BlockedListPointModal";
import { Modal } from "../../Modal/Modal";

export default {
  title: "elements/Modal/content/BlockedListPoint",
  component: BlockedListPointModal,
};

const Template: ComponentStory<typeof BlockedListPointModal> = (args) => (
  <Modal onClose={() => {}} content={<BlockedListPointModal {...args} />} />
);

export const Primary = Template.bind({});
