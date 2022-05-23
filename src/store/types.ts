export type ToDoType = {
  id: number;
  title: string;
  checked: boolean;
};
export type StoreType = {
  todoList: ToDoType[];
  heading: string;
};
