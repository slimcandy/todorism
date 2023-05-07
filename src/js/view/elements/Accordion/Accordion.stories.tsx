import React from "react";
import { ComponentStory } from "@storybook/react";

import { Accordion } from "./Accordion";

export default {
  title: "elements/Accordion",
  component: Accordion,
  args: {
    title: "Lorem ipsum dolor sit.",
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
        accusantium, adipisci aperiam beatae consequuntur delectus dolorem
        ducimus eligendi eveniet exercitationem explicabo incidunt itaque
        labore, libero magnam modi natus officiis porro quam quidem, veniam
        voluptas voluptatibus. Ad, alias aliquam aperiam at autem cumque
        deleniti dicta dignissimos dolor, dolorem enim error est et facere
        facilis fugit iusto labore mollitia nam non nostrum odit officiis omnis
        optio perferendis, praesentium provident quam quo ratione rem
        repudiandae sequi voluptate voluptatibus? Autem, ex, vitae. Aliquam,
        aspernatur aut, consequatur cum deleniti doloremque, eius fuga fugit
        iste neque nesciunt non nulla perspiciatis possimus praesentium quae
        quasi quod!
      </p>
    ),
  },
};

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Primary = Template.bind({});

export const WithLongTitle = Template.bind({});
WithLongTitle.args = {
  title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quia!",
};
