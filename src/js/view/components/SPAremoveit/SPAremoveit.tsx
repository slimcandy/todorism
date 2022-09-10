/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useState } from "react";
import {
  localStorageTripIdKey,
  localStorageUsernameKey,
} from "../../../common/constants";
import {
  pullLocalStorage,
  pushLocalStorage,
} from "../../../utils/localStorage_old";

const SERVER_URL = process.env.REACT_APP_SERVER || "http://localhost:3001";

const SPAremoveit = () => {
  // global store
  const [_userUid, setUserUid] = useState("");
  const [_tripUid, setTripUid] = useState("");
  // 1. Username
  const [username, setUsername] = useState<string>("");
  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const onUsernameSubmit = async () => {
    interface IUsernameResponse {
      user_uid: string;
    }

    interface IUserNameObj {
      username: string;
      user_uid: string;
    }

    const response = await fetch(`${SERVER_URL}/User/User/CreateUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
      }),
    });

    if (response.ok) {
      const json: IUsernameResponse =
        (await response.json()) as IUsernameResponse;
      const { user_uid: userUid } = json;
      const localStorageUserNameObj: IUserNameObj = {
        username,
        user_uid: userUid,
      };

      setUserUid(userUid);
      pushLocalStorage(
        localStorageUsernameKey,
        JSON.stringify(localStorageUserNameObj)
      )
        .then(
          () => {},
          () => {}
        )
        .catch(() => {});
    }
  };

  // 2. Get trips
  const [tripIds, setTripIds] = useState<string[]>([]);
  const [newTripFormOpen, setNewTripFormOpen] = useState<boolean>(false);
  useEffect(() => {
    pullLocalStorage(localStorageTripIdKey as string)
      .then((localStorageString) => {
        if (
          typeof localStorageString === "string" &&
          localStorageString.length > 0
        )
          setTripIds(JSON.parse(localStorageString) as string[]);
      })
      .catch(() => {});
  }, []);
  const onNewTripClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setNewTripFormOpen(true);
  };

  // 3. Форма нового мероприятия
  const [newTripFormName, setNewTripFormName] = useState<string>("");
  const [newTripFormDates, setNewTripFormDates] = useState<string>("");
  const [newTripFormDescription, setNewTripFormDescription] =
    useState<string>("");
  const [peopleFormOpen, setPeopleFormOpen] = useState<boolean>(false);
  const onNewTripFormNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setNewTripFormName(event.target.value);
  const onNewTripFormDatesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setNewTripFormDates(event.target.value);
  const onNewTripFormDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => setNewTripFormDescription(event.target.value);
  const onNewTripFormSubmit = async () => {
    const response = await fetch(
      `${SERVER_URL}/Trip/CreateTrip?user_uid=${_userUid}`,
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

    interface INewTripResponse {
      trip_uid: string;
    }

    if (response.ok) {
      const json: INewTripResponse =
        (await response.json()) as INewTripResponse;
      const { trip_uid: tripUid } = json;

      setPeopleFormOpen(true);
      setTripUid(tripUid);

      pushLocalStorage("localStorageTripIdKey", JSON.stringify(_tripUid))
        .then(
          () => {},
          () => {}
        )
        .catch(() => {});
    }
  };

  // 4. Форма нового человека
  const [personFormName, setPersonFormName] = useState<string>("");
  const [people, setPeople] = useState<string[]>([]);
  const [successPageOpen, setSuccessPageOpen] = useState<boolean>(false);
  const onPersonFormNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPersonFormName(event.target.value);
  const onPersonFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPeople([...people, personFormName]);
  };

  const onFormSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetch(`${SERVER_URL}/trip/`, {
      method: "POST",
      body: JSON.stringify({
        name: newTripFormName,
        dates: newTripFormDates,
        describe: newTripFormDescription,
        people,
      }),
    })
      .then(() => {})
      .catch(() => {})
      .finally(() => setSuccessPageOpen(true)); // тут и ссылка на мероприятие будет
  };

  // 5. Список вещей
  const [itemListTitle, setItemListTitle] = useState<string>("");
  const [itemListItems, setItemListItems] = useState<string[]>([]);

  const handleItemListTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setItemListTitle(event.target.value);
  };

  const handleItemListFormSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setItemListItems([...itemListItems, itemListTitle]);
    setItemListTitle("");
  };

  return (
    <main>
      <h1>Шаги</h1>
      <ol>
        <li>
          <h2>1. Первый экран</h2>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();

              onUsernameSubmit()
                .then(() => {})
                .catch(() => {});
            }}
          >
            <label className="label">
              Представьтесь
              <input
                type="text"
                placeholder="Иван"
                className="input input-bordered w-full max-w-xs"
                value={username}
                onChange={onUsernameChange}
              />
            </label>
            <button type="submit" className="btn">
              1. Сохранить имя
            </button>
          </form>
        </li>
        <li>
          <h2>2. Походы</h2>
          {tripIds.length > 0 ? (
            <ul>
              {tripIds.map((tripId) => (
                <li>{tripId}</li>
              ))}
            </ul>
          ) : (
            <p>У вас ещё нет мероприятий</p>
          )}
          <button type="button" onClick={onNewTripClick} className="btn">
            2. Создать новое мероприятие
          </button>
        </li>
        {newTripFormOpen ? (
          <li>
            <h2>3. Форма нового мероприятия</h2>
            <form
              onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                onNewTripFormSubmit()
                  .then(() => {})
                  .catch(() => {});
              }}
            >
              <label className="label">
                Название мероприятия
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={newTripFormName}
                  onChange={onNewTripFormNameChange}
                />
              </label>
              <label className="label">
                Выберите даты
                <input
                  type="date"
                  className="input input-bordered w-full max-w-xs"
                  value={newTripFormDates}
                  onChange={onNewTripFormDatesChange}
                />
              </label>
              <label className="label">
                Описание
                <textarea
                  className="input input-bordered w-full max-w-xs"
                  value={newTripFormDescription}
                  onChange={onNewTripFormDescriptionChange}
                />
              </label>
              <button type="submit" className="btn">
                3. Добавить
              </button>
            </form>
          </li>
        ) : (
          "Нажми кнопку, чтобы открыть форму мероприятия"
        )}
        {peopleFormOpen ? (
          <li>
            <h2>4. Форма добавления людей</h2>
            {people.length > 0 ? (
              <ul>
                {people.map((person) => (
                  <li>{person}</li>
                ))}
              </ul>
            ) : (
              "Добавьте участников"
            )}
            <form onSubmit={onPersonFormSubmit}>
              <label className="label">
                Имя
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={personFormName}
                  onChange={onPersonFormNameChange}
                />
              </label>
              <button type="submit" className="btn">
                Добавить
              </button>
            </form>
            <button type="button" onClick={onFormSubmit} className="btn">
              4. Сохранить список
            </button>
          </li>
        ) : (
          "Заполни форму мероприятия, чтобы добавить туда людей"
        )}
        {successPageOpen ? (
          <li>Ура! Мероприятие создано! Вот ссылка: урл.рус</li>
        ) : (
          "Добавьте людей, чтобы скопировать ссылку"
        )}
        {successPageOpen && (
          <li>
            <h2>5. Список вещей</h2>
            {itemListItems.length > 0 && (
              <ul>
                {itemListItems.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            )}
            <form
              className="flex my-4 justify-center w-full gap-2"
              onSubmit={handleItemListFormSubmit}
            >
              <label htmlFor="title" className="sr-only">
                Title
              </label>
              <input
                id="title"
                type="text"
                value={itemListTitle}
                onChange={handleItemListTitleChange}
                placeholder="Milk"
                className="input input-bordered w-full max-w-xs"
                data-test="create-list-form-input"
              />
              <button type="submit" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="h-6 w-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <span className="sr-only">Add</span>
              </button>
            </form>
          </li>
        )}
      </ol>
    </main>
  );
};

export default SPAremoveit;
