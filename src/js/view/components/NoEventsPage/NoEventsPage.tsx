import React from "react";
import { ButtonPrimary, TitleH1, EllipseWithImg } from "../../elements";
import fireImg from "../../../../assets/images/fire.png";

import "./NoEventsPage.css";

export const NoEventsPage = () => (
  <div className="no-events-page flex flex-col justify-between px-4 pt-3 pb-6 md:w-80 w-full">
    <div className="">
      <TitleH1>Ваши мероприятия</TitleH1>
    </div>

    <div className="place-items-center">
      <div className="mb-16 mx-auto w-48 text-light-0 dark:text-green-0">
        <EllipseWithImg imgSrc={fireImg}/>
      </div>

      <div className="text-center">
        <TitleH1>У вас еще нет мероприятий</TitleH1>
      </div>
    </div>

    <div className="px-7">
      <ButtonPrimary>+ Создать новое мероприятие</ButtonPrimary>
    </div>
  </div>
);
