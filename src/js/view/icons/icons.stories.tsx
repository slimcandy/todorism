import React from "react";
import { ComponentStory } from "@storybook/react";

import {
  ArrowIcon,
  CalendarIcon,
  CloseIcon,
  EditIcon,
  DeleteIcon,
  GearIcon,
  ZoomIcon,
  PlusIcon,
  LoaderIcon,
  MinusIcon,
  ShareIcon,
  KebabIcon,
  MembersIcon,
  LogoutIcon,
  BurgerIcon,
  FolderIcon,
  ChatIcon,
  ChatQuestionIcon,
} from "./index";

export default {
  title: "elements/icons",
  args: {
    size: 64,
  },
};

// eslint-disable-next-line
const getComponent = (ComponentName: any) => {
  const Template: ComponentStory<typeof ComponentName> = (args) => (
    <ComponentName {...args} />
  );
  return Template;
};

export const Arrow = getComponent(ArrowIcon).bind({});
export const Calendar = getComponent(CalendarIcon).bind({});
export const Close = getComponent(CloseIcon).bind({});
export const Edit = getComponent(EditIcon).bind({});
export const Delete = getComponent(DeleteIcon).bind({});
export const Gear = getComponent(GearIcon).bind({});
export const Zoom = getComponent(ZoomIcon).bind({});
export const Plus = getComponent(PlusIcon).bind({});
export const Loader = getComponent(LoaderIcon).bind({});
export const Minus = getComponent(MinusIcon).bind({});
export const Share = getComponent(ShareIcon).bind({});
export const Kebab = getComponent(KebabIcon).bind({});
export const Members = getComponent(MembersIcon).bind({});
export const Logout = getComponent(LogoutIcon).bind({});
export const Burger = getComponent(BurgerIcon).bind({});
export const Folder = getComponent(FolderIcon).bind({});
export const Chat = getComponent(ChatIcon).bind({});
export const ChatQuestion = getComponent(ChatQuestionIcon).bind({});
