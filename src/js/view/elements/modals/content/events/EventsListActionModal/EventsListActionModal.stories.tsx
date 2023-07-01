import React from "react";
import { ComponentStory } from "@storybook/react";
import { Modal } from "../../../Modal/Modal";
import { EventsListActionModal } from "./EventsListActionModal";

export default {
  title: "elements/Modal/content/EventsListActionModal",
  component: EventsListActionModal,
};

const Template: ComponentStory<typeof EventsListActionModal> = (args) => (
  <Modal onClose={() => {}} content={<EventsListActionModal {...args} />} />
);

export const Primary = Template.bind({});
Primary.args = {
  eventTitle: "Поход в темный лес",
};
