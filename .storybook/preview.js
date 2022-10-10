import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { saveCurrentEventInLocalStorage } from "../src/js/utils/localStorage";

// Initialize user data
saveCurrentEventInLocalStorage({
  member_uid: "39847088-6223-44d1-9874-62e1ad1e3277",
  trip_uid: "b1685c01-8f84-499c-a59f-ffbec4d34bd3",
});

// Initialize MSW
initialize();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [mswDecorator];
