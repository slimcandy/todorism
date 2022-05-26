import { useEffect } from "react";
import { useDispatch } from "react-redux";

import store, {
  setCurrentUserId,
  setHeading,
  setPeople,
  setToDos,
} from "../../store/store";
import { throttle } from "../../utils/pure-helpers";
import { getState, setState } from "../../utils/storage";
import { initialStoreValue, storageName } from "../../store/constants";

const AppWrapper = ({ children }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // preload the store with storage
    getState(storageName, initialStoreValue).then(
      ({ todoList, heading, people, currentUserId }) => {
        dispatch(setHeading(heading));
        dispatch(setToDos(todoList));
        dispatch(setPeople(people));
        if (currentUserId !== null && currentUserId > 0)
          dispatch(setCurrentUserId(currentUserId));
      }
    );
    // subscribe to store changes
    store.subscribe(
      throttle(() => setState(storageName, store.getState()), 1000)
    );
  }, [dispatch]);

  return <>{children}</>;
};

export default AppWrapper;
