import React from "react";
import { TextBodyLarge, TitleH1 } from "../../elements/typo";
import { Input } from "../../elements/Input";
import tentImg from "../../../../assets/images/tent.png"
import { ButtonPrimary } from "../../elements/buttons";

export const WelcomePage = () => {
  const placeHolder = "Как вас зовут?"
  return (
    <div className="pt-16 pb-6 px-4 h-full text-center">
      <div className="mb-16">
        <img src={tentImg} alt="Tent" />
      </div>
      <div className="mb-6">
        <TitleH1>Добро пожаловать!</TitleH1>
      </div>
      <div className="mb-4">
        <TextBodyLarge >Мы — приложение [NAME], лучшее приложение для организации мероприятий!</TextBodyLarge>
      </div>
      <div className="mb-10">
        <TextBodyLarge>Как вас зовут?</TextBodyLarge>
      </div>
      <div className="mb-20">
        <Input type="text" placeholder={placeHolder}/>
      </div>
      <div className="px-7">
        <ButtonPrimary>Запомнить меня</ButtonPrimary>
      </div>
  </div>
  )
}