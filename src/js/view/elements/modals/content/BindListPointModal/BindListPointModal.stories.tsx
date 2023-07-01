import React from "react";
import { ComponentStory } from "@storybook/react";

import { BindListPointModal } from "./BindListPointModal";
import { Modal } from "../../Modal/Modal";
import {
  LIST_POINT_CATEGORIES,
  LIST_POINT_UNITS,
} from "../../../../../interfaces";

export default {
  title: "elements/Modal/content/BindListPoint",
  component: BindListPointModal,
  args: {
    listPoint: {
      pointUid: "baf152f2-96db-449f-8b40-a817864e372e",
      item: {
        name: "Аспирин",
        tags: [LIST_POINT_CATEGORIES.medicines],
      },
      unit: LIST_POINT_UNITS.piece,
      count: "3",
    },
  },
};

const Template: ComponentStory<typeof BindListPointModal> = (args) => (
  <Modal onClose={() => {}} content={<BindListPointModal {...args} />} />
);

export const Primary = Template.bind({});

export const TakenByUser = Template.bind({});
TakenByUser.args = {
  countItemTaken: "2",
};
