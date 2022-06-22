import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setList } from "../../../stores/store";
import { List } from "../../../interfaces";
import { pullLocalStorage, pushLocalStorage } from "../../../utils/localStorage";
import { getStorageList } from "../../../utils/storage";

const localStorageKey = "listKeyMemory";

function FindForm() {
  const dispatch = useDispatch();
  const [key, setKey] = useState<List["key"]>();
  const [listNotFound, setListNotFound] = useState(false);

  const handleKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
  };
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (typeof key === "string" && key.length > 0) {
      void getStorageList(key).then((storageList) => {
        if (storageList) {
          setListNotFound(false);
          dispatch(setList(storageList));
        } else {
          setListNotFound(true);
        }
      });
      void pushLocalStorage(localStorageKey, key);
    }
  };

  useEffect(() => {
    void pullLocalStorage(localStorageKey).then((nextKey) => {
      if (typeof nextKey === "string" && nextKey.length > 0) setKey(nextKey);
    });
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
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            className="input input-bordered w-full max-w-xs"
          />
          <button type="button" className="btn btn-ghost btn-circle">
            <span className="sr-only">Open</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="h-6 w-6"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
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
}

export default FindForm;
