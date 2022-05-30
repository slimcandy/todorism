import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { currentListLabel, initialList } from "../../store/constants";
import store, { clearList, listSelector, setList } from "../../store/store";
import { pullLocalStorage, pushLocalStorage } from "../../utils/localStorage";
import { getStorageList, setStorageList } from "../../utils/storage";
import { FindForm, CreateForm, List } from "../../components";
import { throttle } from "../../utils/pure-helpers";
import { List as ListT } from "../../store/types";

const Panel = () => {
  const [formOpened, setFormOpened] = useState(false);
  const [currentKey, setCurrentKey] = useState<ListT["key"] | null>(
    initialList.key
  );
  const dispatch = useDispatch();
  const list = useSelector(listSelector);

  const handleOpenForm = (event: any) => {
    dispatch(setList(initialList));
    setFormOpened(true);
  };

  const handleClearList = (event: any) => {
    setCurrentKey(null);
    dispatch(clearList);
    list &&
      pushLocalStorage(list.key, "")
        .then(() => {
          console.log("Clear local storage");
          dispatch(clearList());
          setFormOpened(false);
        })
        .catch(console.error);
  };

  useEffect(() => {
    // pull from local storage
    pullLocalStorage(currentListLabel)
      .then((key) => {
        // find list
        if (key && key.length > 0) {
          getStorageList(key)
            .then((storageList) => {
              if (storageList) {
                dispatch(setList(storageList));
                // put key to store
                setCurrentKey(key);
                pushLocalStorage(currentListLabel, key);
              } else {
                console.error("No list fetched");
              }
            })
            .catch(console.error);
        }
      })
      .catch((error) => {
        console.error(error);
        // clear local storage
        setCurrentKey(null);
        dispatch(clearList);
        pushLocalStorage(currentListLabel, "")
          .then(console.log)
          .catch(console.error);
      });
  }, []);

  useEffect(() => {
    if (currentKey) {
      pushLocalStorage(currentListLabel, currentKey);
    } else {
      // clear local storage
      pushLocalStorage(currentListLabel, "")
        .then(console.log)
        .catch(console.error);
    }
  }, [currentKey]);

  useEffect(() => {
    // find list
    if (currentKey && currentKey.length > 0) {
      getStorageList(currentKey)
        .then((storageList) => {
          if (storageList) {
            dispatch(setList(storageList));
          } else {
            console.error("No list fetched");
          }
        })
        .catch(console.error);
    }
  }, [currentKey, dispatch]);

  useEffect(() => {
    if (list) {
      // subscribe to store changes
      store.subscribe(
        throttle(() => setStorageList(initialList.key, list), 1000)
      );
    }
  }, [list]);

  return (
    <>
      <dl>
        <dt>Open list</dt>
        <dd>
          <FindForm />
        </dd>
        or
        <dt>
          {formOpened ? (
            <h2>Create new</h2>
          ) : (
            <button onClick={handleOpenForm}>Create one</button>
          )}
        </dt>
        <dd>{formOpened && <CreateForm />}</dd>
      </dl>
      {list && (
        <>
          <List />
          <button onClick={handleClearList}>Remove list</button>
        </>
      )}
    </>
  );
};

export default Panel;
