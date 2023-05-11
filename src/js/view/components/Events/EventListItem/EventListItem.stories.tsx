import React from "react";
import { ComponentStory } from "@storybook/react";

import { withRouter } from "storybook-addon-react-router-v6";
import { EventListItem } from "./EventListItem";

export default {
  title: "components/EventListItem",
  component: EventListItem,
  decorators: [withRouter],
  args: {
    title: "Поход на байдарках",
    eventUid: "uid",
  },
};

const Template: ComponentStory<typeof EventListItem> = (args) => (
  <EventListItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  description: "о. Вуокса, примерная дистанция - 15км",
  start: "2025-07-19T16:56:27.761Z",
  end: "2025-07-29T16:56:27.761Z",
};

export const WithoutDescription = Template.bind({});
WithoutDescription.args = {
  start: "2025-07-19T16:56:27.761Z",
  end: "2025-07-29T16:56:27.761Z",
};

export const WithoutDates = Template.bind({});
WithoutDates.args = {
  description: "о. Вуокса, примерная дистанция - 15км",
};

export const WithDateStart = Template.bind({});
WithDateStart.args = {
  description: "о. Вуокса, примерная дистанция - 15км",
  start: "2025-07-19T16:56:27.761Z",
};

export const WithDateEnd = Template.bind({});
WithDateEnd.args = {
  description: "о. Вуокса, примерная дистанция - 15км",
  end: "2025-07-29T16:56:27.761Z",
};

export const Expired = Template.bind({});
Expired.args = {
  description: "о. Вуокса, примерная дистанция - 15км",
  start: "2022-07-19T16:56:27.761Z",
  end: "2022-07-29T16:56:27.761Z",
};
