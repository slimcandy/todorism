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
      </ol>
      {newTripFormOpen ? (
        <ol>
          <form>
            <label className="label">
              Название мероприятия
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="label">
              Выберите даты
              <input
                type="date"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="label">
              Описание
              <textarea className="input input-bordered w-full max-w-xs" />
            </label>
          </form>
        </ol>
      ) : (
        "Форма нового мероприятия недоступна"
      )}
    </main>
  );
};

export default SPAremoveit;
