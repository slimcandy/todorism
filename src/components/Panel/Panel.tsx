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
import CurrentUser from "../CurrentUser";
import { Button } from "../../ui";

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
      <div className="border-b-2 mb-2 p-2 grid grid-cols-3 gap-3">
        <div>
          <dt className="font-bold">Open list</dt>
          <dd>
            <FindForm />
          </dd>
        </div>
        <div className="col-span-2">
          <dt className="flex flex-col">
            <span className="pb-1">or</span>
            <Button onClick={handleOpenForm} className="w-full">
              Create one
            </Button>
          </dt>
        </div>
      </div>
      {list && (
        <dd>
          <fieldset>
            <legend>Choose person</legend>
            <CurrentUser />
          </fieldset>
          <fieldset>
            <legend>
              {list.key.length > 0 && list.items.length > 0 ? (
                <strong>{list.key}</strong>
              ) : (
                <>List</>
              )}
            </legend>
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
