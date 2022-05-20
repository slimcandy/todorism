import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, todoListSelector } from "../../store/store";
import ToDoList from "../ToDoList/ToDoList";

const ToDo = () => {
  const todoList = useSelector(todoListSelector);
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCurrentTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };
  const handleAddTodo = () => {
    dispatch(addTodo(todoTitle));
    setTodoTitle("");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo();
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleAddTodo();
    inputRef.current?.focus();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Buy</label>
        <input
          ref={inputRef}
          id="todo"
          type="text"
          value={todoTitle}
          onChange={handleCurrentTodoChange}
          placeholder="Milk"
        />
        <button type="submit" onClick={handleClick}>
          ➕ Add item
        </button>
      </form>
      <ToDoList todoList={todoList} />
    </>
  );
};

export default ToDo;
