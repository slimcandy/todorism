import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { currentListKey, initialList } from "../../store/constants";
import { clearList, listSelector, setList } from "../../store/store";
import { pullLocalStorage } from "../../utils/localStorage";
import { getStorageList } from "../../utils/storage";
import { FindForm, CreateForm, List } from "../../components";

const Panel = () => {
  const [findListFormOpen, setFindListFormOpen] = useState(false);
  const [formOpened, setFormOpened] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector(listSelector);

  const handleOpenForm = (event: any) => {
    dispatch(setList(initialList));
    setFormOpened(true);
  };

  const handleClearList = (event: any) => {
    dispatch(clearList());
    setFormOpened(false);
  };

  useEffect(() => {
    pullLocalStorage(currentListKey)
      .then((listKey) => {
        // check list key
        if (list === null || listKey === null) {
          dispatch(clearList);
          setFindListFormOpen(true);
        }
        // find list
        if (listKey && listKey.length > 0) {
          getStorageList(listKey)
            .then((storageList) => {
              if (storageList) {
                dispatch(setList(storageList));
                setFindListFormOpen(false);
              } else {
                console.error("No list fetch");
              }
            })
            .catch(console.error);
        }
      })
      .catch(console.error);
  }, [dispatch, list]);

  return (
    <>
      <dl>
        <dt>Open list</dt>
        <dd>
          <FindForm />
        </dd>
        or{" "}
        <dt>
          {formOpened ? (
            <h2>Create new</h2>
          ) : (
            <button onClick={handleOpenForm}>Create one</button>
          )}
        </dt>
        <dd>{formOpened && <CreateForm />}</dd>
        {list && (
          <>
            <dt>Clear list</dt>
            <dd>
              <button onClick={handleClearList}>Remove list</button>
            </dd>
          </>
        )}
      </dl>
      {list && <List />}
    </>
  );
};

export default Panel;
