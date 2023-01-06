import React from "react";
import { ComponentStory } from "@storybook/react";
import { ListPointEdit } from "./ListPointEdit";
import { IPrivateListPointFromBE } from "../../../../interfaces";
import {
  privateListPointsFromBE,
  convertIPrivateListPointFromBEToIListPoint,
} from "../../../../utils";

const privateListPoint = convertIPrivateListPointFromBEToIListPoint(
  (privateListPointsFromBE as IPrivateListPointFromBE[])[0]
);

export default {
  title: "components/ListPoint/ListPointEdit",
  component: ListPointEdit,
};

const Template: ComponentStory<typeof ListPointEdit> = (args) => (
  <ListPointEdit {...args} />
);

export const CreateMode = Template.bind({});
CreateMode.args = {
  isCreationMode: true,
};

export const EditMode = Template.bind({});
EditMode.args = {
  listPoint: privateListPoint,
};
