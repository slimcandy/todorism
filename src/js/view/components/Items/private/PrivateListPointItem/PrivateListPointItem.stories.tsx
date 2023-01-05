import React from "react";
import { ComponentStory } from "@storybook/react";
import { PrivateListPointItem } from "./PrivateListPointItem";
import {
  privateListPointsFromBE,
  convertIPrivateListPointFromBEToIListPoint,
} from "../../../../../utils";
import { IPrivateListPointFromBE } from "../../../../../interfaces";

const privateListPoint = convertIPrivateListPointFromBEToIListPoint(
  (privateListPointsFromBE as IPrivateListPointFromBE[])[0]
);

export default {
  title: "components/listPoint/private/PrivateListPointItem",
  component: PrivateListPointItem,
  args: {
    listPoint: privateListPoint,
  },
};

const Template: ComponentStory<typeof PrivateListPointItem> = (args) => (
  <PrivateListPointItem {...args} />
);

export const Primary = Template.bind({});

export const WithLongName = Template.bind({});
WithLongName.args = {
  listPoint: {
    ...privateListPoint,
    item: {
      ...privateListPoint.item,
      name: "Очень теплый пуховый спальник",
    },
  },
};
