import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { saveState } from "../utils/localStorage";
import { throttle } from "../utils/pure-helpers";
import { getState } from "../utils/useStorage";
import { initialStoreValue, storageName } from "./constants";
import { StoreType } from "./types";

const todoSlice = createSlice({
  name: "todoList",
  initialState: initialStoreValue.todoList,
  reducers: {
    addTodo: (todoList, action: PayloadAction<string>) => {
      action.payload.length > 0 &&
        todoList.push({
          id: Date.now(),
          title: action.payload,
          checked: false,
        });
    },
    removeTodo: (todoList, action: PayloadAction<number>) => {
      action.payload > 0 &&
        todoList.splice(
          todoList.findIndex((todo) => todo.id === action.payload),
          1
        );
    },
    toggleTodo: (todoList, action: PayloadAction<number>) => {
      action.payload > 0 &&
        todoList.forEach((todo) => {
          if (todo.id === action.payload) {
            todo.checked = !todo.checked;
          }
        });
    },
  },
});

const headingSlice = createSlice({
  name: "heading",
  initialState: initialStoreValue.heading,
  reducers: {
    setHeading: (heading, action: PayloadAction<string>) => {
      if (action.payload.length > 0 && heading !== action.payload)
        return action.payload;
      else return heading;
    },
  },
});

// pull from some storage or use initial value
const storageState = getState(storageName, initialStoreValue);

const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer,
    heading: headingSlice.reducer,
  },
  preloadedState: storageState,
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export const { setHeading } = headingSlice.actions;

export const todoListSelector = (state: StoreType) => state.todoList;
export const headingSelector = (state: StoreType) => state.heading;
export const storeSelector = (state: StoreType) => state;

// subscribe to store changes
store.subscribe(
  throttle(() => {
    saveState(storageName, store.getState());
  }, 1000)
);

export default store;
