import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentListKey } from "../../store/constants";
import { clearList, listSelector, setList } from "../../store/store";
import { pullLocalStorage } from "../../utils/localStorage";
import { getStorageList } from "../../utils/storage";
import FindForm from "../FindForm";

const Panel = () => {
  const [findListFormOpen, setFindListFormOpen] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector(listSelector);

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
              }
            })
            .catch(console.error);
        }
      })
      .catch(console.error);
  }, [dispatch, list]);

  if (findListFormOpen) {
    return (
      <dl>
        <dt>Open list</dt>
        <dd>
          <FindForm />
        </dd>
        or <dt>Create one</dt>
        <dd>create list form</dd>
      </dl>
    );
  }
  if (list) {
    return <p>List</p>;
  }
  return <p>List Panel</p>;
};

export default Panel;
