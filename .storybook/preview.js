import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { saveCurrentEventInLocalStorage } from "../src/js/utils/localStorage";
import i18n from "../src/i18n";

// Initialize user data
saveCurrentEventInLocalStorage({
  member_uid: "39847088-6223-44d1-9874-62e1ad1e3277",
  trip_uid: "b1685c01-8f84-499c-a59f-ffbec4d34bd3",
});

// Initialize MSW
initialize();

export const globalTypes = {
  locale: {
    name: "Locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "ru", title: "Russian" },
      ],
      showName: true,
    },
  },
};

const i18nextStoryDecorator = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  );
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [mswDecorator, i18nextStoryDecorator];
