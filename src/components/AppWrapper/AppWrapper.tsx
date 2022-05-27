import { useEffect } from "react";
import { useDispatch } from "react-redux";

import store, {
  setCurrentUserId,
  setHeading,
  setPeople,
  setTodoLists,
} from "../../store/store";
import { throttle } from "../../utils/pure-helpers";
import { getList, setList } from "../../utils/storage";
import { initialStoreValue, listKey } from "../../store/constants";

const AppWrapper = ({ children }: any) => {
  const dispatch = useDispatch();
  const currentList

  useEffect(() => {
    // preload the store with storage
    getList(listKey).then((list) => {
      if(list) {

      dispatch(setHeading(heading));
      dispatch(setTodoLists(todoLists));
      dispatch(setPeople(people));
      if (currentUserId !== null && currentUserId > 0)
        dispatch(setCurrentUserId(currentUserId));
    });
    // subscribe to store changes
    store.subscribe(
      throttle(() => setState(storageName, store.getState()), 1000)
    );
  }, [dispatch]);

  return <>{children}</>;
};

export default AppWrapper;
