import { Person, StoreType, ToDoType, TodoList } from "./types";

export const initialToDo: ToDoType[] = [];
export const initialToDoLists: TodoList[] = [];
export const initialHeading: string = "Goods";
export const initialPeople: Person[] = [];
export const initialStoreValue: StoreType = {
  todoLists: initialToDoLists,
  heading: initialHeading,
  people: initialPeople,
  currentUserId: null,
};

export const listKey: string = "todo-list";
