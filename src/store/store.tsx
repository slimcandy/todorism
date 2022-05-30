import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStore } from "./constants";
import { Item, List, StoreType } from "./types";

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
    addItem: (list, action: PayloadAction<Item>) => {
      if (list && action.payload.title.length > 0) {
        list.items = [...list.items, action.payload];
      }
      return list;
    },
  },
});

// const currentListKeySlice = {
//   name: "currentListKey",
//   initialState: initialStore.currentListKey,
//   reducers: {
//     setCurrentListKey: (key, action: PayloadAction<List["key"]>) => {
//       if (action.payload.length > 0) {
//         return action.payload;
//       }
//       return key;
//     },
//     clearCurrentListKey: () => null,
//   },
// };

const store = configureStore({
  reducer: {
    list: listSlice.reducer,
    // currentListKey: currentListKeySlice.reducers,
  },
});

export const { setList, clearList, addItem } = listSlice.actions;

export const listSelector = (state: StoreType) => state.list;

export default store;
