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
  CurrentUser,
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
      <div className="navbar border-b-2 border-b-base-200 shadow-md px-10">
        <div className="flex-1">
          <dt className="sr-only">Open list</dt>
          <dd>
            <FindForm />
          </dd>
        </div>
        <div className="flex-1 normal-case text-xl">
          TODO<span className="font-thin">rism</span>
        </div>
        <dt className="flex-none">
          <div className="divider divider-horizontal flex-1">OR</div>
          <button onClick={handleOpenForm} className="btn">
            Create one
          </button>
        </dt>
      </div>
      {list && (
        <dd className="p-2">
          <fieldset>
            <legend className="sr-only">Choose person</legend>
            <div className="form-control my-4">
              <label className="input-group">
                <span>I'm</span>
                <CurrentUser />
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend className="py-2">
              {list.key.length > 0 && list.items.length > 0 ? (
                <span className="select-all">{list.key}</span>
              ) : (
                <>List</>
              )}
            </legend>
            <CreateForm />
            <List />
            <button onClick={handleClearList} className="btn">
              Remove list
            </button>
            <button onClick={handleSaveList} className="btn">
              Save list
            </button>
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
