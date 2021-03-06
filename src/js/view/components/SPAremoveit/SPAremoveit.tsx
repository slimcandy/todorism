/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useState } from "react";
import {
  localStorageUsernameKey,
  localStorageTripIdKey,
} from "../../../common/constants";
import {
  pullLocalStorage,
  pushLocalStorage,
} from "../../../utils/localStorage";

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
    pullLocalStorage(localStorageTripIdKey)
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

  // 3. ?????????? ???????????? ??????????????????????
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

  // 4. ?????????? ???????????? ????????????????
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
      .finally(() => setSuccessPageOpen(true)); // ?????? ?? ???????????? ???? ?????????????????????? ??????????
  };

  // 5. ???????????? ??????????
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
      <h1>????????</h1>
      <ol>
        <li>
          <h2>1. ???????????? ??????????</h2>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();

              onUsernameSubmit()
                .then(() => {})
                .catch(() => {});
            }}
          >
            <label className="label">
              ??????????????????????????
              <input
                type="text"
                placeholder="????????"
                className="input input-bordered w-full max-w-xs"
                value={username}
                onChange={onUsernameChange}
              />
            </label>
            <button type="submit" className="btn">
              1. ?????????????????? ??????
            </button>
          </form>
        </li>
        <li>
          <h2>2. ????????????</h2>
          {tripIds.length > 0 ? (
            <ul>
              {tripIds.map((tripId) => (
                <li>{tripId}</li>
              ))}
            </ul>
          ) : (
            <p>?? ?????? ?????? ?????? ??????????????????????</p>
          )}
          <button type="button" onClick={onNewTripClick} className="btn">
            2. ?????????????? ?????????? ??????????????????????
          </button>
        </li>
        {newTripFormOpen ? (
          <li>
            <h2>3. ?????????? ???????????? ??????????????????????</h2>
            <form
              onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                onNewTripFormSubmit()
                  .then(() => {})
                  .catch(() => {});
              }}
            >
              <label className="label">
                ???????????????? ??????????????????????
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={newTripFormName}
                  onChange={onNewTripFormNameChange}
                />
              </label>
              <label className="label">
                ???????????????? ????????
                <input
                  type="date"
                  className="input input-bordered w-full max-w-xs"
                  value={newTripFormDates}
                  onChange={onNewTripFormDatesChange}
                />
              </label>
              <label className="label">
                ????????????????
                <textarea
                  className="input input-bordered w-full max-w-xs"
                  value={newTripFormDescription}
                  onChange={onNewTripFormDescriptionChange}
                />
              </label>
              <button type="submit" className="btn">
                3. ????????????????
              </button>
            </form>
          </li>
        ) : (
          "?????????? ????????????, ?????????? ?????????????? ?????????? ??????????????????????"
        )}
        {peopleFormOpen ? (
          <li>
            <h2>4. ?????????? ???????????????????? ??????????</h2>
            {people.length > 0 ? (
              <ul>
                {people.map((person) => (
                  <li>{person}</li>
                ))}
              </ul>
            ) : (
              "???????????????? ????????????????????"
            )}
            <form onSubmit={onPersonFormSubmit}>
              <label className="label">
                ??????
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={personFormName}
                  onChange={onPersonFormNameChange}
                />
              </label>
              <button type="submit" className="btn">
                ????????????????
              </button>
            </form>
            <button type="button" onClick={onFormSubmit} className="btn">
              4. ?????????????????? ????????????
            </button>
          </li>
        ) : (
          "?????????????? ?????????? ??????????????????????, ?????????? ???????????????? ???????? ??????????"
        )}
        {successPageOpen ? (
          <li>??????! ?????????????????????? ??????????????! ?????? ????????????: ??????.??????</li>
        ) : (
          "???????????????? ??????????, ?????????? ?????????????????????? ????????????"
        )}
        {successPageOpen && (
          <li>
            <h2>5. ???????????? ??????????</h2>
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
