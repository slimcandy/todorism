import "../src/styles/index.css";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../src/i18n";
import { LoadingProvider } from "../src/js/hooks";

export const globalTypes = {
  darkMode: {
    defaultValue: "dark",
  },
  locale: {
    name: "Locale",
    defaultValue: "ru",
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
    <LoadingProvider>
      <I18nextProvider i18n={i18n}>
        <div
          className="flex flex-col relative bg-light-4 dark:bg-black-0 px-base"
          style={{ height: "100vh" }}
        >
          <Story />
        </div>
      </I18nextProvider>
    </LoadingProvider>
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
  viewport: {
    defaultViewport: "mobile1",
  },
  layout: "fullscreen",
};

export const decorators = [i18nextStoryDecorator];
