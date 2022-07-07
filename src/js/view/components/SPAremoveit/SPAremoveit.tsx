import React, { useEffect, useState } from "react";
import {
  USERNAME_LOCAL_STORAGE_KEY,
  TRIP_IDS_LOCAL_STORAGE_KEY,
} from "../../../common/constants";
import {
  pullLocalStorage,
  pushLocalStorage,
} from "../../../utils/localStorage";

const SPAremoveit = () => {
  // 1. Username
  const [username, setUsername] = useState<string>("");
  useEffect(() => {
    pullLocalStorage(USERNAME_LOCAL_STORAGE_KEY)
      .then((usernameFromLocalStorage) => {
        if (
          typeof usernameFromLocalStorage === "string" &&
          usernameFromLocalStorage.length > 0
        )
          setUsername(usernameFromLocalStorage);
      })
      .catch(console.error);
  }, []);
  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const onUsernameSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (typeof username === "string" && username.trim().length > 0) {
      pushLocalStorage(USERNAME_LOCAL_STORAGE_KEY, username)
        .then(() => console.log("username sucessfully saved"))
        .catch(console.error);
    }
  };

  // 2. Get trips
  const [tripIds, setTripIds] = useState<string[]>([]);
  const [newTripFormOpen, setNewTripFormOpen] = useState<boolean>(false);
  useEffect(() => {
    pullLocalStorage(TRIP_IDS_LOCAL_STORAGE_KEY)
      .then((localStorageString) => {
        if (
          typeof localStorageString === "string" &&
          localStorageString.length > 0
        )
          setTripIds(JSON.parse(localStorageString) as string[]);
      })
      .catch(console.error);
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
  const onNewTripFormSubmut = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // save to local storage
    setPeopleFormOpen(true);
  };

  // 4. Форма нового человека
  const [personFormName, setPersonFormName] = useState<string>("");
  const [people, setPeople] = useState<string[]>([]);
  const [successPageOpen, setSuccessPageOpen] = useState<boolean>(false);
  const onPersonFormNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPersonFormName(event.target.value);
  const onPersonFormSubmut = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPeople([...people, personFormName]);
  };

  const onFormSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const serverUrl = process.env.SERVER || "";
    fetch(`${serverUrl}/api/trip/`, {
      method: "POST",
      body: JSON.stringify({
        name: newTripFormName,
        dates: newTripFormDates,
        describe: newTripFormDescription,
        people,
      }),
    })
      .then(console.log)
      .catch(console.error)
      .finally(() => setSuccessPageOpen(true));
  };

  return (
    <main>
      <h1>Шаги</h1>
      <ol>
        <li>
          <h2>1. Первый экран</h2>
          <form onSubmit={onUsernameSubmit}>
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
              Сохранить имя
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
            +Создать новое мероприятие
          </button>
        </li>
        {newTripFormOpen ? (
          <li>
            <h2>3. Форма нового мероприятия</h2>
            <form onSubmit={onNewTripFormSubmut}>
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
                Добавить
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
            <form onSubmit={onPersonFormSubmut}>
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
              Сохранить список
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
      </ol>
    </main>
  );
};

export default SPAremoveit;
