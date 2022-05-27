import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStore } from "./constants";
import { List, StoreType } from "./types";

const listSlice = createSlice({
  name: "list",
  initialState: initialStore.list,
  reducers: {
    setList: (list, action: PayloadAction<List>) => {
      if (action.payload && action.payload.key.length > 0)
        return action.payload;
      return list;
    },
    clearList: () => null,
  },
});

const store = configureStore({
  reducer: {
    list: listSlice.reducer,
  },
});

export const { setList, clearList } = listSlice.actions;

export const listSelector = (state: StoreType) => state.list;

export default store;
