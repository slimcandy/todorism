import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/store";
import { ToDoType } from "../../store/types";

export type ToDoListPropsType = {
  todoList: ToDoType[];
};
const ToDoList = ({ todoList }: ToDoListPropsType) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = (id: number) => dispatch(removeTodo(id));

  if (todoList.length > 0) {
    return (
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <p>{todo.title}</p>
            <button onClick={() => handleRemoveTodo(todo.id)}>
              ❌ Remove item
            </button>
          </li>
        ))}
      </ul>
    );
  }
  return <p>All items completed</p>;
};

export default ToDoList;
