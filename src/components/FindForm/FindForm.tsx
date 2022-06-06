import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setList } from "../../store/store";
import { List } from "../../store/types";
import { pullLocalStorage, pushLocalStorage } from "../../utils/localStorage";
import { getStorageList } from "../../utils/storage";

const localStorageKey = "listKeyMemory";

const FindForm = () => {
  const dispatch = useDispatch();
  const [key, setKey] = useState<List["key"]>();
  const [listNotFound, setListNotFound] = useState(false);

  const handleKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
  };
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    key &&
      getStorageList(key)
        .then((storageList) => {
          if (storageList) {
            setListNotFound(false);
            dispatch(setList(storageList));
          } else {
            setListNotFound(true);
          }
        })
        .catch(console.error);
    key && pushLocalStorage(localStorageKey, key);
  };

  useEffect(() => {
    pullLocalStorage(localStorageKey)
      .then((key) => key && setKey(key))
      .catch(console.error);
  }, []);

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="grid grid-cols-2 gap-4 form-control"
      >
        <div className="input-group">
          <label htmlFor="key" className="label sr-only">
            List key
          </label>
          <input
            type="text"
            placeholder="List key"
            id="key"
            value={key}
            onChange={handleKeyChange}
            autoFocus={true}
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-ghost btn-circle">
            <span className="sr-only">Open</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
      {listNotFound && (
        <div className="alert shadow-lg">
          Cannot find list. Try different key.
        </div>
      )}
    </>
  );
};

export default FindForm;
