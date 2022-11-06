import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setList } from "../../../stores/store";
import { List } from "../../../interfaces";
import {
  pullLocalStorage,
  pushLocalStorage,
} from "../../../utils/localStorage_old";
import { getStorageList } from "../../../utils/storage";
import { ZoomIcon } from "../../icons";

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
            <ZoomIcon size={32} color="#1C1C28" />
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
