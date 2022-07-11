import React from "react";
import {
  ArrowIcon,
  CalendarIcon,
  CloseIcon,
  DeleteIcon,
  EditIcon,
  KebabIcon,
  MinusIcon,
  PlusIcon,
  ShareIcon,
  ZoomIcon,
} from "../../icons";
import {
  TextBodyLarge,
  TextBodyMedium,
  TextBodySmall,
  TextBodyStandard,
  TitleH1,
  TitleH2,
  TitleH3,
} from "../../elements/typo";
import { ButtonPrimary } from "../../elements/buttons";

import "./UIKitPage.css";

export function UIKitPage() {
  return (
    <div className="ui-kit-page p-4">
      <TitleH1>UI-kit page</TitleH1>
      <div className="fonts flex p-2 gap-4">
        <div className="flex-column">
          <TitleH1>TitleH1: Заголовок первого уровня</TitleH1>
          <TitleH2>TitleH2: Заголовок второго уровня</TitleH2>
          <TitleH3>TitleH3: Заголовок третьего уровня</TitleH3>
        </div>
        <div>
          <TextBodyLarge>TextBodyLarge: Крупный наборный текст</TextBodyLarge>
          <br />
          <TextBodyMedium>
            TextBodyMedium: Текст для кнопок и кликабельного текста
          </TextBodyMedium>
          <br />
          <TextBodyStandard>
            TextBodyStandard: Стандартный наборный текст
          </TextBodyStandard>
          <br />
          <TextBodySmall>
            TextBodySmall: Мелкий наборный текст, текст для пояснений
          </TextBodySmall>
        </div>
      </div>
      <div className="icons-sizes flex p-2 gap-4">
        <h5>32</h5>
        <h5>24</h5>
        <h5>20</h5>
        <h5>16</h5>
        <h5>12</h5>
      </div>
      <div className="icons">
        <div className="flex mb-4 gap-3 items-center">
          <KebabIcon size={32} />
          <KebabIcon size={24} />
          <KebabIcon size={20} />
          <KebabIcon size={16} />
          <KebabIcon size={12} />
        </div>
        <div className="flex mb-4 gap-3 items-center">
          <CalendarIcon size={32} />
          <CalendarIcon size={24} />
          <CalendarIcon size={20} />
          <CalendarIcon size={16} />
          <CalendarIcon size={12} />
        </div>
        <div className="flex mb-4 gap-3 items-center">
          <PlusIcon size={32} />
          <PlusIcon size={24} />
          <PlusIcon size={20} />
          <PlusIcon size={16} />
          <PlusIcon size={12} />
        </div>
        <div className="flex mb-4 gap-3 items-center">
          <MinusIcon size={32} />
          <MinusIcon size={24} />
          <MinusIcon size={20} />
          <MinusIcon size={16} />
          <MinusIcon size={12} />
        </div>
        <div className="flex mb-4 gap-3 items-center">
          <ZoomIcon size={32} />
          <ZoomIcon size={24} />
          <ZoomIcon size={20} />
          <ZoomIcon size={16} />
          <ZoomIcon size={12} />
        </div>
        <div className="flex mb-4 gap-3 items-center">
          <DeleteIcon size={32} />
          <DeleteIcon size={24} />
          <DeleteIcon size={20} />
          <DeleteIcon size={16} />
          <DeleteIcon size={12} />
        </div>
        <div className="flex mb-4 gap-3 items-center">
          <EditIcon size={32} />
          <EditIcon size={24} />
          <EditIcon size={20} />
          <EditIcon size={16} />
          <EditIcon size={12} />
        </div>
        <div className="flex mb-4 gap-3 items-center">
          <ShareIcon size={32} />
          <ShareIcon size={24} />
          <ShareIcon size={20} />
          <ShareIcon size={16} />
          <ShareIcon size={12} />
        </div>
        <div className="flex mb-4 gap-3 items-center">
          <CloseIcon size={32} />
          <CloseIcon size={24} />
          <CloseIcon size={20} />
          <CloseIcon size={16} />
          <CloseIcon size={12} />
        </div>
        <div className="flex mb-4 gap-3 items-center">
          <ArrowIcon size={32} />
          <ArrowIcon size={24} direction="down" />
          <ArrowIcon size={20} direction="left" />
          <ArrowIcon size={16} direction="right" />
          <ArrowIcon size={12} />
        </div>
      </div>
      <div>
        <ButtonPrimary>+ Создать новое мероприятие</ButtonPrimary>
        <ButtonPrimary disabled>+ Создать новое мероприятие</ButtonPrimary>
      </div>
    </div>
  );
}
