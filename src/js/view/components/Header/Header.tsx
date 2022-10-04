import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { langLocales } from "../../../common/constants";
import { TitleH1 } from "../../elements";
import { GearIcon } from "../../icons";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";

type HeaderProps = {
  isWithLogo?: boolean;
};

export const Header = (props: HeaderProps) => {
  const { isWithLogo } = props;

  const { i18n } = useTranslation();

  const cLanguage = useCallback(
    async (language: string) => {
      await i18n.changeLanguage(language).then();
    },
    [i18n]
  );

  const onLangChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value) {
        void cLanguage(e.target.value);
      } else {
        void cLanguage("ru");
      }
    },
    [cLanguage]
  );
  return (
    <header
      className="h-header sticky top-0
    flex justify-between items-center bg-inherit
    dark:text-light-4 text-black-0 z-10"
    >
      {isWithLogo && <TitleH1>LOGO</TitleH1>}
      {!isWithLogo && <div> Back </div>}
      <div className="flex">
        <div className="mr-4">
          <select
            className="select w-full select-xs w-full max-w-xs dark:bg-black-4"
            onChange={(e) => onLangChange(e)}
          >
            {langLocales.map((opt) => (
              <option key={opt.id} value={opt.lang}>
                {opt.title}
              </option>
            ))}
          </select>
        </div>
        <div className="mr-4">
          <ThemeToggler />
        </div>
        <GearIcon size={24} />
      </div>
    </header>
  );
};
