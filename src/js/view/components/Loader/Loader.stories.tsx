import React from "react";
import { ComponentStory } from "@storybook/react";

import { saveLoadingStateInLocalStorage } from "../../../utils/localStorage";

import { Loader } from "./Loader";

export default {
  title: "components/Loader",
  component: Loader,
};

saveLoadingStateInLocalStorage(true);

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Primary = Template.bind({});
