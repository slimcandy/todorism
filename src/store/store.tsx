import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialToDo } from "./constants";
import { StoreType } from "./types";

const todoSlice = createSlice({
  name: "todoList",
  initialState: initialToDo,
  reducers: {
    addTodo: (todoList, action: PayloadAction<string>) => {
      todoList.push({ id: Date.now(), title: action.payload });
    },
    removeTodo: (todoList, action: PayloadAction<number>) => {
      todoList.splice(
        todoList.findIndex((todo) => todo.id === action.payload),
        1
      );
    },
  },
});

const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer,
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export const todoListSelector = (state: StoreType) => state.todoList;

export default store;
