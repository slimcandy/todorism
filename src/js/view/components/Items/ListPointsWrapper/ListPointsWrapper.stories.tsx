import React from "react";
import { ComponentStory } from "@storybook/react";
import { ListPointsWrapper } from "./ListPointsWrapper";
import { IListPoint, IPrivateListPointFromBE } from "../../../../interfaces";
import {
  convertIPrivateListPointFromBEToIListPoint,
  privateListPointsFromBE,
} from "../../../../utils";

const privateListPoint = convertIPrivateListPointFromBEToIListPoint(
  (privateListPointsFromBE as IPrivateListPointFromBE[])[0]
);

export default {
  title: "components/ListPoint/ListPointsWrapper",
  component: ListPointsWrapper,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const list: IListPoint[] = Array(40).fill(privateListPoint);

const Template: ComponentStory<typeof ListPointsWrapper> = (args) => (
  <ListPointsWrapper {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  listPoints: list,
  listPointItem: (index: number) => <div>{list[index].item.name}</div>,
};

export const Empty = Template.bind({});
Empty.args = {
  listPoints: [],
};
