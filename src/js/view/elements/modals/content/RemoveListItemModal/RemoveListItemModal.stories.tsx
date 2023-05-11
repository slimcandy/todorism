import React from "react";
import { ComponentStory } from "@storybook/react";

import { RemoveListItemModal } from "./RemoveListItemModal";
import { Modal } from "../../Modal/Modal";

export default {
  title: "elements/Modal/content/RemoveListItemModal",
  component: RemoveListItemModal,
  args: {
    title: "Удалить позицию 'Газовая горелка'?",
  },
};

const Template: ComponentStory<typeof RemoveListItemModal> = (args) => (
  <Modal onClose={() => {}} content={<RemoveListItemModal {...args} />} />
);

export const RemoveListPoint = Template.bind({});

export const WithDeletionWarningMessage = Template.bind({});
WithDeletionWarningMessage.args = {
  description: "Это может затронуть других участников",
};

export const RemoveEvent = Template.bind({});
RemoveEvent.args = {
  title: "Удалить мероприятие 'Поход в темный лес'?",
};
