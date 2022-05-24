import { StoreType, ToDoType } from "./types";

export const initialToDo: ToDoType[] = [];
export const initialHeading: string = "Goods";
export const initialStoreValue: StoreType = {
  todoList: initialToDo,
  heading: initialHeading,
};

export const storageName: string = "todo-list";
