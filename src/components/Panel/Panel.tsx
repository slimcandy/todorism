import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { initialList } from "../../store/constants";
import { clearList, listSelector, setList } from "../../store/store";
import { pushLocalStorage } from "../../utils/localStorage";
import { setStorageList } from "../../utils/storage";
import {
  FindForm,
  CreateForm,
  List,
  PeopleForm,
  PeopleList,
} from "../../components";

const Panel = () => {
  const dispatch = useDispatch();
  const list = useSelector(listSelector);

  const handleOpenForm = () => dispatch(setList(initialList));

  const handleClearList = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatch(clearList);
    list &&
      pushLocalStorage(list.key, "")
        .then(() => dispatch(clearList()))
        .catch(console.error);
  };

  const handleSaveList = () =>
    list &&
    setStorageList(list.key, list)
      .then(() => {
        console.log("Saved form");
      })
      .catch(console.error);

  return (
    <dl>
      <dt>Open list</dt>
      <dd>
        <FindForm />
      </dd>
      or
      <dt>
        <button onClick={handleOpenForm}>Create one</button>
      </dt>
      {list && (
        <dd>
          <fieldset>
            <legend>List</legend>
            <CreateForm />
            <List />
            <button onClick={handleClearList}>Remove list</button>
            <button onClick={handleSaveList}>Save list</button>
          </fieldset>
          <fieldset>
            <legend>Assign People</legend>
            <PeopleForm />
            <PeopleList people={list.people} />
          </fieldset>
        </dd>
      )}
    </dl>
  );
};

export default Panel;
