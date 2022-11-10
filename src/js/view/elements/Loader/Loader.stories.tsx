import React from "react";
import { ComponentStory } from "@storybook/react";
import { Loader } from "./Loader";

export default {
  title: "elements/Loader",
  component: Loader,
};

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 24,
};
