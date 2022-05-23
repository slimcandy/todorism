import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialToDo, initialHeading } from "./constants";
import { StoreType } from "./types";

const todoSlice = createSlice({
  name: "todoList",
  initialState: initialToDo,
  reducers: {
    addTodo: (todoList, action: PayloadAction<string>) => {
      action.payload.length > 0 &&
        todoList.push({ id: Date.now(), title: action.payload });
    },
    removeTodo: (todoList, action: PayloadAction<number>) => {
      action.payload > 0 &&
        todoList.splice(
          todoList.findIndex((todo) => todo.id === action.payload),
          1
        );
    },
  },
});

const headingSlice = createSlice({
  name: "heading",
  initialState: initialHeading,
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
});

export const { addTodo, removeTodo } = todoSlice.actions;
export const { setHeading } = headingSlice.actions;

export const todoListSelector = (state: StoreType) => state.todoList;
export const headingSelector = (state: StoreType) => state.heading;

export default store;
