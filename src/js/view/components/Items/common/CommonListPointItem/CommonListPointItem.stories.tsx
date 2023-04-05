import React from "react";
import { ComponentStory } from "@storybook/react";
import { CommonListPointItem } from "./CommonListPointItem";
import { ICommonListPointFromBE } from "../../../../../interfaces";
import {
  commonListPointsFromBE,
  convertICommonListPointFromBEToIListPoint,
} from "../../../../../utils";

const commonListPoint = convertICommonListPointFromBEToIListPoint(
  (commonListPointsFromBE as ICommonListPointFromBE[])[0]
);

export default {
  title: "components/listPoint/common/CommonListPointItem",
  component: CommonListPointItem,
  args: {
    listPoint: commonListPoint,
  },
};

const Template: ComponentStory<typeof CommonListPointItem> = (args) => (
  <CommonListPointItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  listPoint: {
    ...commonListPoint,
    count: "10",
  },
};

export const WithLongName = Template.bind({});
WithLongName.args = {
  listPoint: {
    ...commonListPoint,
    item: {
      ...commonListPoint.item,
      name: "Очень чистая родниковая вода",
    },
    count: "5",
    unit: "liter",
  },
};

export const NotTakenItem = Template.bind({});
NotTakenItem.args = {
  listPoint: {
    ...commonListPoint,
    bindings: [],
  },
};

export const TakenItem = Template.bind({});
TakenItem.args = {
  memberUid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
};

export const BindingSuccessfully = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const LoadingWithLongNameItem = Template.bind({});
LoadingWithLongNameItem.args = {
  loading: true,
  listPoint: {
    ...commonListPoint,
    item: {
      ...commonListPoint.item,
      name: "Очень чистая родниковая вода",
    },
    count: "5",
    unit: "liter",
  },
};
