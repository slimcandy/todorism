import React from "react";
import { ComponentStory } from "@storybook/react";

import { ListPointActionModal } from "./ListPointActionModal";
import { Modal } from "../../Modal/Modal";

export default {
  title: "elements/Modal/content/ListPointActionModal",
  component: ListPointActionModal,
  args: {
    listPointName: "Газовая горелка",
  },
};

const Template: ComponentStory<typeof ListPointActionModal> = (args) => (
  <Modal onClose={() => {}} content={<ListPointActionModal {...args} />} />
);

export const Primary = Template.bind({});

export const WithDeletionWarningMessage = Template.bind({});
WithDeletionWarningMessage.args = {
  showDeletionWarningMessage: true,
};
