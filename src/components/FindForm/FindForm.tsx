import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setList } from "../../store/store";
import { List } from "../../store/types";
import { getStorageList } from "../../utils/storage";

const FindForm = () => {
  const dispatch = useDispatch();
  const [key, setKey] = useState<List["key"]>("");
  const [listNotFound, setListNotFound] = useState(false);

  const handleKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKey(event.target.value);
  };
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="key">List key</label>
      <input
        type="text"
        placeholder="List key"
        id="key"
        value={key}
        onChange={handleKeyChange}
        autoFocus={true}
      />
      <button type="submit">Open</button>
      {listNotFound && <small>Cannot find list. Try different key.</small>}
    </form>
  );
};

export default FindForm;
