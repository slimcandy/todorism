import React from "react";
import { ComponentStory } from "@storybook/react";

import { withRouter } from "storybook-addon-react-router-v6";
import { EventList } from "./EventList";

export default {
  title: "components/EventList",
  component: EventList,
  decorators: [withRouter],
};

const Template: ComponentStory<typeof EventList> = (args) => (
  <EventList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  list: [
    {
      eventUid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      title: "Днюха в Солотче",
      description: "string",
      start: "2022-06-29T16:56:27.761Z",
      end: "2022-06-29T16:56:27.761Z",
    },
    {
      eventUid: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
      title: "Поход на байдарках",
      description: "",
      start: "2022-07-19T16:56:27.761Z",
      end: "2022-07-29T16:56:27.761Z",
    },
    {
      eventUid: "3fa85f64-5717-4562-b3fc-2c963f66afa5",
      title: "Карелия",
      description: "",
      start: "",
      end: "",
    },
    {
      eventUid: "3fa85f64-5717-4562-b3fc-2c963f66afa5",
      title: "Вылазка на великах в Зеленогорск",
      description: "",
      start: "2022-09-09T16:56:27.761Z",
      end: "2022-09-09T16:56:27.761Z",
    },
  ],
};
