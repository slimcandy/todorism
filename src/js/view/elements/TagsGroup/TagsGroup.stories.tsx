import React from "react";
import { ComponentStory } from "@storybook/react";
import { TagsGroup } from "./TagsGroup";

import { LIST_POINT_CATEGORIES } from "../../../interfaces";

export default {
  title: "elements/tagsGroup",
  component: TagsGroup,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    tags: Object.values(LIST_POINT_CATEGORIES),
  },
};

const Template: ComponentStory<typeof TagsGroup> = (args) => (
  <TagsGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  tags: [
    LIST_POINT_CATEGORIES.food,
    LIST_POINT_CATEGORIES.clothes,
    LIST_POINT_CATEGORIES.other,
  ],
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

export const WithLocalization = Template.bind({});
WithLocalization.args = {
  localizationPath: "list_point.categories",
};
