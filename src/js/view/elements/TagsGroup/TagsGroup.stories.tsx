import React from "react";
import { ComponentStory } from "@storybook/react";
import { TagsGroup } from "./TagsGroup";

export default {
  title: "elements/tagsGroup",
  component: TagsGroup,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    tags: [
      "еда",
      "вода",
      "одежда",
      "развлечения",
      "лекарства",
      "другое",
      "пятое",
      "десятое",
    ],
  },
};

const Template: ComponentStory<typeof TagsGroup> = (args) => (
  <TagsGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  tags: ["еда", "вода", "одежда"],
};

export const MultipleLines = Template.bind({});

export const WithActiveTag = Template.bind({});
WithActiveTag.args = {
  activeTagIndex: 1,
};

export const Readonly = Template.bind({});
Readonly.args = {
  activeTagIndex: 1,
  readonly: true,
};

export const Small = Template.bind({});
Small.args = {
  size: "s",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "m",
};

export const Large = Template.bind({});
Large.args = {
  size: "l",
};
