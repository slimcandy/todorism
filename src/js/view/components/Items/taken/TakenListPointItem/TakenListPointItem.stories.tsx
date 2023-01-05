import React from "react";
import { ComponentStory } from "@storybook/react";
import { TakenListPointItem } from "./TakenListPointItem";
import {
  takenListPointFromBE,
  untakenListPointFromBE,
  convertITakenListPointFromBEToITakenListPoint,
} from "../../../../../utils";
import { ITakenListPointFromBE } from "../../../../../interfaces";

const untakenListPoint = convertITakenListPointFromBEToITakenListPoint(
  (untakenListPointFromBE as ITakenListPointFromBE[])[0]
);
const takenListPoint = convertITakenListPointFromBEToITakenListPoint(
  (takenListPointFromBE as ITakenListPointFromBE[])[0]
);

export default {
  title: "components/listPoint/taken/TakenListPointItem",
  component: TakenListPointItem,
  args: {
    listPoint: untakenListPoint,
  },
};

const Template: ComponentStory<typeof TakenListPointItem> = (args) => (
  <TakenListPointItem {...args} />
);

export const Primary = Template.bind({});

export const Taken = Template.bind({});
Taken.args = {
  listPoint: takenListPoint,
};
