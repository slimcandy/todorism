import React from "react";
import { ComponentStory } from "@storybook/react";

import { RemoveListPointModal } from "./RemoveListPointModal";
import { Modal } from "../../Modal/Modal";

export default {
  title: "elements/Modal/content/RemoveListPointModal",
  component: RemoveListPointModal,
  args: {
    listPointName: "Газовая горелка",
  },
};

const Template: ComponentStory<typeof RemoveListPointModal> = (args) => (
  <Modal onShow={() => {}} content={<RemoveListPointModal {...args} />} />
);

export const Primary = Template.bind({});

export const WithDeletionWarningMessage = Template.bind({});
WithDeletionWarningMessage.args = {
  showDeletionWarningMessage: true,
};
