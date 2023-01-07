import React from "react";
import { ComponentStory } from "@storybook/react";
import { TextBodyStandard } from "./TextBodyStandard";

export default {
  title: "elements/typography/TextBodyStandard",
  component: TextBodyStandard,
};

const Template: ComponentStory<typeof TextBodyStandard> = (args) => (
  <TextBodyStandard {...args}>
    TextBodyStandard / Body 14: Стандартный наборный текст
  </TextBodyStandard>
);

export const Primary = Template.bind({});
