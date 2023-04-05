import React from "react";
import { ComponentStory } from "@storybook/react";
import { convertIEventFromBEToIEvent, fullEvent } from "../../../utils";
import { EventTitle } from "./EventTitle";
import { IEventFromBE } from "../../../interfaces";

const event = convertIEventFromBEToIEvent(fullEvent as IEventFromBE);

export default {
  title: "elements/EventTitle",
  component: EventTitle,
  args: {
    event,
  },
};

const Template: ComponentStory<typeof EventTitle> = (args) => (
  <EventTitle {...args} />
);

export const Primary = Template.bind({});

export const WithLongTitle = Template.bind({});
WithLongTitle.args = {
  event: {
    ...event,
    title: "Очень длинный Новый год 2023 года",
  },
};

export const WithoutDate = Template.bind({});
WithoutDate.args = {
  event: {
    ...event,
    start: "",
    end: "",
  },
};

export const WithoutStartDate = Template.bind({});
WithoutStartDate.args = {
  event: {
    ...event,
    start: "",
  },
};

export const WithoutEndDate = Template.bind({});
WithoutEndDate.args = {
  event: {
    ...event,
    end: "",
  },
};
