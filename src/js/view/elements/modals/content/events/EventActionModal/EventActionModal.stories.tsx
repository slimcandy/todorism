import React from "react";
import { ComponentStory } from "@storybook/react";

import { EventActionModal } from "./EventActionModal";
import { Modal } from "../../../Modal/Modal";

export default {
  title: "elements/Modal/content/EventActionModal",
  component: EventActionModal,
};

const Template: ComponentStory<typeof EventActionModal> = (args) => (
  <Modal onClose={() => {}} content={<EventActionModal {...args} />} />
);

export const Primary = Template.bind({});
