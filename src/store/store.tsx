import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialStoreValue } from "./constants";
import { Person, StoreType, TodoList, ToDoType } from "./types";

const listSlice = createSlice({
  name: "list",
  

const todoListsSlice = createSlice({
  name: "todoLists",
  initialState: initialStoreValue.todoLists,
  reducers: {
    addTodoList: (todoLists, action: PayloadAction<TodoList>) => {
      action.payload.todoList.length > 0 &&
        todoLists.push({
          uniqueId: action.payload.uniqueId,
          name: action.payload.name,
          shared: action.payload.shared,
          todoList: action.payload.todoList,
        });
    },
    removeTodoList: (
      todoLists,
      action: PayloadAction<TodoList["uniqueId"]>
    ) => {
      action.payload.length > 0 &&
        todoLists.splice(
          todoLists.findIndex(
            (todoList) => todoList.uniqueId === action.payload
          ),
          1
        );
    },
    toggleShared: (todoLists, action: PayloadAction<TodoList["uniqueId"]>) => {
      if (action.payload.length > 0) {
        const index = todoLists.findIndex(
          (list) => list.uniqueId === action.payload
        );
        todoLists[index].shared = !todoLists[index].shared;
      }
    },
    setTodoLists: (
      todoLists,
      action: PayloadAction<StoreType["todoLists"]>
    ) => {
      if (action.payload.length > 0) {
        return action.payload;
      }
      return todoLists;
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
    todoLists: todoListsSlice.reducer,
    heading: headingSlice.reducer,
    people: peopleSlice.reducer,
    currentUserId: currentUserIdSlice.reducer,
  },
  preloadedState: initialStoreValue,
});

export const { addTodoList, removeTodoList, setTodoLists, toggleShared } =
  todoListsSlice.actions;
export const { addPerson, removePerson, setPeople } = peopleSlice.actions;
export const { setCurrentUserId } = currentUserIdSlice.actions;
export const { setHeading } = headingSlice.actions;

export const todoListsSelector = (state: StoreType) => state.todoLists;
export const peopleSelector = (state: StoreType) => state.people;
export const headingSelector = (state: StoreType) => state.heading;
export const currentUserIdSelector = (state: StoreType) => state.currentUserId;

export default store;
