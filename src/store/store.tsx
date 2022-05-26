import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialStoreValue } from "./constants";
import { Person, StoreType, ToDoType } from "./types";

const todoSlice = createSlice({
  name: "todoList",
  initialState: initialStoreValue.todoList,
  reducers: {
    addTodo: (todoList, action: PayloadAction<ToDoType["title"]>) => {
      action.payload.length > 0 &&
        todoList.push({
          id: Date.now(),
          title: action.payload,
          checked: false,
        });
    },
    removeTodo: (todoList, action: PayloadAction<ToDoType["id"]>) => {
      action.payload > 0 &&
        todoList.splice(
          todoList.findIndex((todo) => todo.id === action.payload),
          1
        );
    },
    toggleTodo: (todoList, action: PayloadAction<ToDoType["id"]>) => {
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
    setHeading: (heading, action: PayloadAction<StoreType["heading"]>) => {
      if (action.payload.length > 0 && heading !== action.payload)
        return action.payload;
      else return heading;
    },
  },
});

const peopleSlice = createSlice({
  name: "people",
  initialState: initialStoreValue.people,
  reducers: {
    addPerson: (people, action: PayloadAction<Person["name"]>) => {
      action.payload.length > 0 &&
        people.push({
          id: Date.now(),
          name: action.payload,
        });
    },
    removePerson: (people, action: PayloadAction<Person["id"]>) => {
      action.payload > 0 &&
        people.splice(
          people.findIndex((person) => person.id === action.payload),
          1
        );
    },
    setPeople: (people, action: PayloadAction<StoreType["people"]>) => {
      if (action.payload.length > 0) {
        return action.payload;
      }
      return people;
    },
  },
});

const currentUserIdSlice = createSlice({
  name: "currentUser",
  initialState: initialStoreValue.currentUserId,
  reducers: {
    setCurrentUserId: (
      currentUser,
      action: PayloadAction<StoreType["currentUserId"]>
    ) => {
      if (action.payload === null) {
        return null;
      }
      if (action.payload > 0) {
        return action.payload;
      }
      return currentUser;
    },
  },
});

const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer,
    heading: headingSlice.reducer,
    people: peopleSlice.reducer,
    currentUserId: currentUserIdSlice.reducer,
  },
  preloadedState: initialStoreValue,
});

export const { addTodo, removeTodo, toggleTodo, setToDos } = todoSlice.actions;
export const { addPerson, removePerson, setPeople } = peopleSlice.actions;
export const { setCurrentUserId } = currentUserIdSlice.actions;
export const { setHeading } = headingSlice.actions;

export const todoListSelector = (state: StoreType) => state.todoList;
export const peopleSelector = (state: StoreType) => state.people;
export const headingSelector = (state: StoreType) => state.heading;
export const currentUserIdSelector = (state: StoreType) => state.currentUserId;

export default store;
