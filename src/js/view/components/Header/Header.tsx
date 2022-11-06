import React, { useCallback } from "react";
import { Link } from "react-router-dom";
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
      className="fixed top-0 left-0 z-20
    pt-3 pb-4 px-4 bg-light-4 dark:bg-dark-0
    flex justify-between w-full
    dark:text-light-4 text-black-0"
    >
      {isWithLogo && (
        <Link to="/">
          <TitleH1>LOGO</TitleH1>
        </Link>
      )}
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
