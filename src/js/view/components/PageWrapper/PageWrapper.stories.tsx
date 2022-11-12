import React from "react";
import { ComponentStory } from "@storybook/react";

import { PageWrapper } from "./PageWrapper";

export default {
  title: "components/PageWrapper",
  component: PageWrapper,
  args: {
    sticky: true,
    primaryButtonText: "Готово",
  },
};

const pageContent = <div>PAGE CONTENT</div>;
const pageFooter = <div>FOOTER CONTENT</div>;

const Template: ComponentStory<typeof PageWrapper> = (args) => (
  <div className="flex h-[400px]">
    <PageWrapper {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  pageContent,
  pageFooter,
};

export const VerticalTopPageContent = Template.bind({});
VerticalTopPageContent.args = {
  pageContent,
  pageFooter,
  verticalTopPageContent: true,
};

const TemplateWithTitle: ComponentStory<typeof PageWrapper> = (args) => (
  <div className="flex flex-col flex h-[400px]">
    <div>OUTER TITLE</div>
    <PageWrapper {...args} />
  </div>
);

export const WithOuterContent = TemplateWithTitle.bind({});
WithOuterContent.args = {
  pageContent,
  pageFooter,
  className: "h-full",
};
