import React from "react";
import { useTranslation } from "react-i18next";

// Icons
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

// Texts and buttons
import {
  ButtonCircle,
  ButtonPrimary,
  ButtonSecondary,
  ButtonSquare,
  ButtonTransparent,
  Indicator,
  TextBodyLarge,
  TextBodyMedium,
  TextBodySmall,
  TextBodyStandard,
  TitleH1,
  TitleH2,
  TitleH3,
  Input,
} from "../../elements";
import { TagMe } from "../../elements/TagMe";
import SearchBar from "../SearchBar/SearchBar";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { EventListItem } from "../Events/EventListItem";
import { EventList } from "../Events/EventList";

export function UIKitPage() {
  const { t } = useTranslation();
  return (
    <div className="ui-kit-page p-4  dark:text-light-4 text-black-0">
      <h1>UI-kit page</h1>
      <span className="mr-2">
        <Indicator />
      </span>
      <span className="mr-2">
        <Indicator isActive />
      </span>
      <span className="mr-2">
        <TagMe />
      </span>
      <ThemeToggler />
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
        <div className="buttons">
          <TextBodyLarge>Button primary</TextBodyLarge>
          <div className="flex mt-1 mr-2">
            <div className="mr-2">
              <ButtonPrimary>+ Создать новое мероприятие</ButtonPrimary>
            </div>
            <div>
              <ButtonPrimary disabled>
                + Создать новое мероприятие
              </ButtonPrimary>
            </div>
            <div className="mr-2">
              <ButtonCircle icon={<PlusIcon size={24} />} />
            </div>
            <div>
              <ButtonSquare icon={<PlusIcon size={24} />} />
            </div>
          </div>
          <div className="mt-2">
            <TextBodyLarge>Button secondary</TextBodyLarge>
          </div>
          <div className="flex mt-1">
            <div className="mr-2">
              <ButtonSecondary>+ Создать новое мероприятие</ButtonSecondary>
            </div>
            <div>
              <ButtonSecondary disabled>
                + Создать новое мероприятие
              </ButtonSecondary>
            </div>
          </div>
          <div className="mt-2">
            <TextBodyLarge>Button text only</TextBodyLarge>
          </div>
          <div className="flex mt-1">
            <div className="mr-2">
              <ButtonTransparent>+ Добавить</ButtonTransparent>
            </div>
            <div className="mr-2">
              <ButtonTransparent disabled>+ Добавить</ButtonTransparent>
            </div>
            <div className="mr-2">
              <ButtonTransparent icon={<ArrowIcon size={16} direction="up" />}>
                Скрыть
              </ButtonTransparent>
            </div>
            <div>
              <ButtonTransparent
                icon={<ArrowIcon size={16} direction="up" />}
                disabled
              >
                Скрыть
              </ButtonTransparent>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mr-8">
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
        </div>
        <div>
          <h2 className="text-white">Components</h2>
          <div className="mb-6">
            <h4 className="text-myPerfectDark">SearchBar</h4>
            <SearchBar placeholder="Поиск" />
          </div>
          <div>
            <TitleH3 className="mb-4">Inputs</TitleH3>
            <TextBodyLarge>Simple input</TextBodyLarge>
            <div className="w-80">
              <Input placeholder={t("inputs.whats_your_name")} />
            </div>

            <TextBodySmall>With Icon</TextBodySmall>
            <div className="w-80">
              <Input
                placeholder={t("inputs.whats_your_name")}
                icon={<CalendarIcon size={20} />}
              />
            </div>

            <div className="w-80 mt-4">
              <Input
                placeholder={t("inputs.whats_your_name")}
                icon={<CalendarIcon size={20} className="cursor-pointer" />}
                isIconLeft
              />
            </div>

            <TextBodySmall>Disabled</TextBodySmall>
            <div className="w-80">
              <Input placeholder={t("inputs.whats_your_name")} disabled />
            </div>

            <TextBodySmall>Disabled with icon</TextBodySmall>
            <div className="w-80">
              <Input
                placeholder={t("inputs.whats_your_name")}
                icon={<CalendarIcon size={20} />}
                disabled
              />
            </div>
          </div>
        </div>
        <div className="ml-8 w-80">
          <TextBodyLarge>EventListItem</TextBodyLarge>
          <div className="mt-6">
            <EventListItem
              tripUid="123456789"
              title="Поход на Ястребиное"
              description="С заходом на базу отдыха «Надежда» и на скалу Парнас"
              dateStart="2022-06-29T16:56:27.761Z"
              dateEnd="2022-06-29T16:56:27.761Z"
            />
          </div>
          <div>
            <div className="mb-4 mt-8">
              <TextBodyLarge>EventList</TextBodyLarge>
            </div>
            <EventList
              list={[
                {
                  tripUid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                  title: "Днюха в Солотче",
                  description: "string",
                  dateStart: "2022-06-29T16:56:27.761Z",
                  dateEnd: "2022-06-29T16:56:27.761Z",
                },
                {
                  tripUid: "3fa85f64-5717-4562-b3fc-2c963f66afa3",
                  title: "Поход на байдарках",
                  description: "",
                  dateStart: "2022-07-19T16:56:27.761Z",
                  dateEnd: "2022-07-29T16:56:27.761Z",
                },
                {
                  tripUid: "3fa85f64-5717-4562-b3fc-2c963f66afa5",
                  title: "Карелия",
                  description: "",
                  dateStart: "",
                  dateEnd: "",
                },
                {
                  tripUid: "3fa85f64-5717-4562-b3fc-2c963f66afa5",
                  title: "Вылазка на великах в Зеленогорск",
                  description: "",
                  dateStart: "2022-09-09T16:56:27.761Z",
                  dateEnd: "2022-09-09T16:56:27.761Z",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
