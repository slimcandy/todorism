import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialStoreValue } from "./constants";
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
    setToDos: (todoList, action: PayloadAction<StoreType["todoList"]>) => {
      if (action.payload.length > 0) {
        return action.payload;
      }
      return todoList;
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

const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer,
    heading: headingSlice.reducer,
  },
  preloadedState: initialStoreValue,
});

export const { addTodo, removeTodo, toggleTodo, setToDos } = todoSlice.actions;
export const { setHeading } = headingSlice.actions;

export const todoListSelector = (state: StoreType) => state.todoList;
export const headingSelector = (state: StoreType) => state.heading;
export const storeSelector = (state: StoreType) => state;

export default store;
