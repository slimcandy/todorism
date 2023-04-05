import React from "react";
import { ComponentStory } from "@storybook/react";
import { TextBodyLarge } from "./TextBodyLarge";

export default {
  title: "elements/typography/TextBodyLarge",
  component: TextBodyLarge,
};

const Template: ComponentStory<typeof TextBodyLarge> = (args) => (
  <TextBodyLarge {...args}>
    TextBodyLarge / Body 16: Крупный наборный текст
  </TextBodyLarge>
);

export const Primary = Template.bind({});
