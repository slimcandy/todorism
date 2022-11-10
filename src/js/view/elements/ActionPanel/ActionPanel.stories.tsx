import React from "react";
import { ComponentStory } from "@storybook/react";

import { ActionPanel } from "./ActionPanel";
import { DeleteIcon } from "../../icons";

export default {
  title: "elements/ActionPanel",
  component: ActionPanel,
  argTypes: {
    icon: {
      options: ["deleteIcon"],
      mapping: {
        deleteIcon: <DeleteIcon size={20} />,
      },
    },
  },
  args: {
    sticky: true,
    primaryButtonText: "Готово",
  },
};

const Template: ComponentStory<typeof ActionPanel> = (args) => (
  <>
    <div className="h-[1000px]" />
    <ActionPanel {...args} />
  </>
);

export const Primary = Template.bind({});

export const NoSticky = Template.bind({});
NoSticky.args = {
  sticky: false,
};

export const WithDisabledPrimaryButton = Template.bind({});
WithDisabledPrimaryButton.args = {
  primaryButtonDisabled: true,
};

export const WithSecondaryButton = Template.bind({});
WithSecondaryButton.args = {
  secondaryButtonText: "Пропустить шаг",
};

export const WithIconForSecondaryButton = Template.bind({});
WithIconForSecondaryButton.args = {
  secondaryButtonText: "Пропустить шаг",
  secondaryButtonIcon: "deleteIcon",
};
