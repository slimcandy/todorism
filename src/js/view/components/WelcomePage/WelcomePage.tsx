import React from "react";
import axios from "axios";
import { TextBodyLarge, TitleH1 } from "../../elements/typo";
import { Input } from "../../elements/Input";
// import { ButtonPrimary } from "../../elements/buttons";
import tentImg from "../../../../assets/images/tent.png";

export const WelcomePage = () => {
  const createUser = async () =>
    axios
      .post("https://tracking-organizer.herokuapp.com/User/User/CreateUser", {
        nickname: "testUser",
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

  return (
    <div className="pt-16 pb-6 px-4 h-full text-center">
      <div className="mb-16">
        <img src={tentImg} alt="Tent" />
      </div>

      <div className="mb-6">
        <TitleH1>Добро пожаловать!</TitleH1>
      </div>

      <div className="mb-4">
        <TextBodyLarge>
          Мы — приложение [NAME], лучшее приложение для организации мероприятий!
        </TextBodyLarge>
      </div>

      <div className="mb-10">
        <TextBodyLarge>Как вас зовут?</TextBodyLarge>
      </div>

      <div className="mb-20">
        <Input type="text" placeholder="Как вас зовут?" />
      </div>

      <div className="px-7">
        {/* eslint-disable-next-line no-void */}
        <button onClick={() => void createUser()}> Запомнить меня </button>
        {/*     <ButtonPrimary onClick={() => console.log("click")}>
          Запомнить меня
        </ButtonPrimary> */}
      </div>
    </div>
  );
};
