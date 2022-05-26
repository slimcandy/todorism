export type ToDoType = {
  id: number;
  title: string;
  checked: boolean;
};

export type Person = {
  id: number;
  name: string;
};

export type StoreType = {
  todoList: ToDoType[];
  heading: string;
  people: Person[];
  currentUserId: Person["id"] | null;
};
