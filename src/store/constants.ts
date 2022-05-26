import { Person, StoreType, ToDoType } from "./types";

export const initialToDo: ToDoType[] = [];
export const initialHeading: string = "Goods";
export const initialPeople: Person[] = [];
export const initialStoreValue: StoreType = {
  todoList: initialToDo,
  heading: initialHeading,
  people: initialPeople,
  currentUserId: null,
};

export const storageName: string = "todo-list";
