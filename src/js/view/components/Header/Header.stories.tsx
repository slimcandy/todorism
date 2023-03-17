import React from "react";
import { ComponentStory } from "@storybook/react";

import { withRouter } from "storybook-addon-react-router-v6";
import { Header } from "./Header";

export default {
  title: "components/Header",
  component: Header,
  decorators: [withRouter],
};

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Primary = Template.bind({});

export const withoutLogo = Template.bind({});
withoutLogo.parameters = {
  reactRouter: {
    routePath: "/event",
  },
};
