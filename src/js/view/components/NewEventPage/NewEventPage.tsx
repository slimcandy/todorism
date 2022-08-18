import React from "react";
import { useTranslation } from "react-i18next";
import { Input, TextBodyStandard, TitleH1 } from "../../elements";

export const NewEventPage = () => {
  const { t } = useTranslation();
  // 3. Форма нового мероприятия
  /*  const [newTripFormErrors, setNewTripFormErrors] = useState<string>("");
    const [newTripFormName, setNewTripFormName] = useState<string>("");
    const [newTripFormDates, setNewTripFormDates] = useState<string>(
      new Date().toISOString()
    );
    const [newTripFormDescription, setNewTripFormDescription] =
      useState<string>("");
    const [peopleFormOpen, setPeopleFormOpen] = useState<boolean>(false);
    const onNewTripFormNameChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => setNewTripFormName(event.target.value);
    const onNewTripFormDatesChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => setNewTripFormDates(new Date(event.target.value).toISOString());
    const onNewTripFormDescriptionChange = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => setNewTripFormDescription(event.target.value);
    const onNewTripFormSubmit = async () => {
      const response = await fetch(
        `${SERVER_URL}/Trip/CreateTrip?author_name=${username}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newTripFormName,
            description: newTripFormDescription,
            start: newTripFormDates,
            end: newTripFormDates,
          }),
        }
      );

      if (response.ok) {
        const json: INewTripResponse =
          (await response.json()) as INewTripResponse;
        const { trip_uid, member_uid } = json;

        setPeopleFormOpen(true);

        const mebmberTripObj = { trip_uid, member_uid };

        pushLocalStorage(
          localStorageTripObjects,
          JSON.stringify([mebmberTripObj])
        )
          .then(
            () => {},
            () => {}
          )
          .catch(() => {});
      } else {
        interface IErrorResponse {
          detail: {
            loc: string[];
            msg: string;
            type: string;
          }[];
        }
        const errorResponse = (await response.json()) as IErrorResponse;
        let errorMessage = "";
        errorResponse.detail.forEach((error) => {
          errorMessage += `${error.msg}. \n`;
        });
        setNewTripFormErrors(errorMessage);
      }
    }; */
  return (
    <div
      className="min-h-screen
      flex flex-col
      justify-between md:justify-start
      px-4 pt-16 xs:pt-16 pb-6 mx-auto
      sm:w-6/12
      w-full"
    >
      <div>
        <div className="mb-6">
          <TitleH1>{t("pages.new_event.title")}</TitleH1>
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <TextBodyStandard className="dark:text-dark-3">
              {t("pages.new_event.event_name")}
            </TextBodyStandard>
            <TextBodyStandard className="dark:text-dark-3">*</TextBodyStandard>
          </div>
          <Input
            placeholder={`${t("pages.new_event.example")}, ${t(
              "pages.new_event.event_name_example"
            )}`}
          />
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <TextBodyStandard className="dark:text-dark-3">
              {t("pages.new_event.dates")}
            </TextBodyStandard>
          </div>
          <Input placeholder={`${t("pages.new_event.example")}, 12.06.2022`} />
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <TextBodyStandard className="dark:text-dark-3">
              {t("pages.new_event.description")}
            </TextBodyStandard>
          </div>
          <textarea rows={3} className="textarea w-full px-4 py-3
          focus:outline-none bg-light-2 text-black-4
          dark:bg-black-2 dark:text-light-0
          placeholder:text-dark-4 placeholder:dark:text-dark-2
          focus:dark:placeholder:text-light-0 focus:placeholder:text-black-4
          hover:placeholder:text-dark-3 hover:dark:placeholder:text-dark-3 hover:text-dark-3"
                    placeholder={`${t("pages.new_event.example")}, ${t("pages.new_event.description_example")}`}/>
        </div>
      </div>
    </div>
  );
};
