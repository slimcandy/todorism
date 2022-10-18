import React from "react";
import { ComponentStory } from "@storybook/react";
import { RecommendedListPoints } from "./RecommendedListPoints";
import { saveRecommendedListPointsInLocalStorage } from "../storages";
import {
  IListPoint,
  LIST_POINT_CATEGORIES,
  LIST_POINT_UNITS,
} from "../../../../../interfaces";

const list: IListPoint[] = Array(40).fill({
  item: {
    name: "Греча",
    tags: [LIST_POINT_CATEGORIES.food],
  },
  unit: LIST_POINT_UNITS.gram,
  count: "3",
}) as IListPoint[];

saveRecommendedListPointsInLocalStorage(list);

export default {
  title: "components/listPoint/RecommendedListPoints",
  component: RecommendedListPoints,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    layout: "fullscreen",
  },
};

const Template: ComponentStory<typeof RecommendedListPoints> = () => (
  <div className="flex h-screen bg-light-4 dark:bg-black-0">
    <RecommendedListPoints />
  </div>
);

export const Primary = Template.bind({});
