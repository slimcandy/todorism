import React from "react";
import { ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { RecommendedListPointsPage } from "./RecommendedListPointsPage";
import { IListPoint, IPrivateListPointFromBE } from "../../../../interfaces";
import {
  privateListPointsFromBE,
  convertIPrivateListPointFromBEToIListPoint,
} from "../../../../utils";
import {
  saveRecommendedListPointsInLocalStorage,
  localStorageRecommendedListPoints,
} from "../storages";

const privateListPoints = privateListPointsFromBE.map((lp) =>
  convertIPrivateListPointFromBEToIListPoint(lp as IPrivateListPointFromBE)
);

const initialLocalStorageState = ({
  listPoints,
}: {
  listPoints: IListPoint[];
}) => {
  window.localStorage.removeItem(localStorageRecommendedListPoints);
  saveRecommendedListPointsInLocalStorage(listPoints);
  return Promise.resolve({});
};

export default {
  title: "pages/listPoint/recommended/RecommendedListPoints",
  component: RecommendedListPointsPage,
  decorators: [withRouter],
};

const Template: ComponentStory<typeof RecommendedListPointsPage> = () => (
  <RecommendedListPointsPage />
);

export const Primary = Template.bind({});
Primary.loaders = [
  () => initialLocalStorageState({ listPoints: privateListPoints }),
];

export const Empty = Template.bind({});
Empty.loaders = [() => initialLocalStorageState({ listPoints: [] })];
