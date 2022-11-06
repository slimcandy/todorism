import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { initialList } from "../../../stores/storeConstants";
import { clearList, listSelector, setList } from "../../../stores/store";
import { pushLocalStorage } from "../../../utils/localStorage_old";
import { setStorageList } from "../../../utils/storage";
import {
  CreateForm,
  CurrentUser,
  FindForm,
  List,
  PeopleForm,
  PeopleList,
} from "../index";

export function Panel() {
  const dispatch = useDispatch();
  const list = useSelector(listSelector);

  const handleOpenForm = () => dispatch(setList(initialList));

  const handleClearList = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    dispatch(clearList);
    if (list !== null)
      void pushLocalStorage(list.key, "").then(() => dispatch(clearList()));
  };

  const handleSaveList = () => {
    if (list !== null) void setStorageList(list.key, list);
  };

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
          <button type="button" onClick={handleOpenForm} className="btn">
            Create one
          </button>
        </dt>
      </div>
      {list && (
        <dd className="p-2">
          <fieldset className="flex justify-center">
            <legend className="sr-only">Choose person</legend>
            <div className="form-control my-4">
              <label className="input-group" htmlFor="currentUser">
                <span>I&apos;m</span>
                <CurrentUser />
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend className="w-full py-2 border-b-2 border-b-base-200">
              {list.key.length > 0 && list.items.length > 0 ? (
                <>
                  List key: <kbd className="kbd select-all">{list.key}</kbd>
                </>
              ) : (
                <>List</>
              )}
            </legend>
            <CreateForm />
            <List />
            <div className="btn-group my-4 justify-center">
              <button
                type="button"
                onClick={handleClearList}
                className="btn btn-ghost gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="h-6 w-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
                Remove list
              </button>
              <button
                type="button"
                onClick={handleSaveList}
                className="btn btn-active gap-2"
                data-test="save-list"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="h-6 w-6"
                >
                  <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
                </svg>
                Save list
              </button>
            </div>
          </fieldset>
          <fieldset>
            <legend className="w-full py-2 border-b-2 border-b-base-200">
              Assign People
            </legend>
            <PeopleForm />
            <PeopleList people={list.people} />
          </fieldset>
        </dd>
      )}
    </dl>
  );
}
