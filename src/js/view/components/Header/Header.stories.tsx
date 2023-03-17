import React from "react";
import { ComponentStory } from "@storybook/react";

import { withRouter } from "storybook-addon-react-router-v6";
import { Header } from "./Header";
import { saveUserNameInLocalStorage } from "../../../utils/localStorage";

const setLocalStorageUsername = (name: string) => {
  saveUserNameInLocalStorage(name);
  return Promise.resolve({});
};

export default {
  title: "components/Header",
  component: Header,
  decorators: [withRouter],
};

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Primary = Template.bind({});
Primary.loaders = [() => setLocalStorageUsername("Ваня")];

export const withoutLogo = Template.bind({});
withoutLogo.loaders = [() => setLocalStorageUsername("Ваня")];
withoutLogo.parameters = {
  reactRouter: {
    routePath: "/event",
  },
};

export const withLongName = Template.bind({});
withLongName.loaders = [
  () => setLocalStorageUsername("Очень очень очень длинный Ваня"),
];
withLongName.parameters = {
  reactRouter: {
    routePath: "/event",
  },
};
