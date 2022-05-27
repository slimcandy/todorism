import React, { useState } from "react";
import { useSelector } from "react-redux";
import { todoListsSelector } from "../../store/store";
import { TodoList } from "../../store/types";

const ToDoLists = () => {
  const [listId, setListId] = useState<TodoList["uniqueId"]>();
  const [uniqueTag, setUniqueTag] = useState<TodoList["uniqueId"]>();

  const lists = useSelector(todoListsSelector);

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUniqueTag(event.target.value);
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const index = lists.findIndex(
      (list) => list.uniqueId.toLowerCase() === uniqueTag?.trim().toLowerCase()
    );
    dispatch(addTodo(todoTitle));
    setTodoTitle("");

    inputRef.current?.focus();
  };

  return (
    <form>
      <label htmlFor="uniqueTag">List tag</label>
      <input
        type="text"
        placeholder="432U2e&w"
        id="uniqueTag"
        value={uniqueTag}
        onChange={handleTagChange}
      />
      <button type="submit">Open</button>
    </form>
  );
};

export default ToDoLists;
