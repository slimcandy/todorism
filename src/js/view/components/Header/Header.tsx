import React from "react";
import { TitleH1 } from "../../elements";
import { GearIcon } from "../../icons";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";

type HeaderProps = {
  isWithLogo?: boolean
}

export const Header = (props: HeaderProps) => {
  const { isWithLogo } = props;

  return (
    <header className="fixed top-0 left-4
    pt-3 pr-8
    flex justify-between w-full
    dark:text-light-4 text-black-0">
      {isWithLogo && <TitleH1>LOGO</TitleH1>}
      {!isWithLogo && <div> Back </div>}
      <div className="flex">
        <ThemeToggler />
        <GearIcon size={24} />
      </div>
    </header>
  );
};