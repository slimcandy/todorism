import React from "react";
import { ComponentStory } from "@storybook/react";
import {
  members,
  fullEvent,
  convertIEventFromBEToIEvent,
} from "../../../utils";
import { WhoAreYou } from "./WhoAreYou";
import { IEventFromBE } from "../../../interfaces";

const event = convertIEventFromBEToIEvent(fullEvent as IEventFromBE);

export default {
  title: "components/WhoAreYou",
  component: WhoAreYou,
  args: {
    members,
    event,
    isWelcomePage: true,
  },
};

const Template: ComponentStory<typeof WhoAreYou> = (args) => (
  <WhoAreYou {...args} />
);

export const Primary = Template.bind({});

export const ChangeMember = Template.bind({});
ChangeMember.args = {
  isWelcomePage: false,
};
