// import { useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { addTodo, todoListSelector } from "../../store/store";
// import ToDoListComponent from "../ToDoList/ToDoList";

// const ToDoLists = () => {
//   const todoList = useSelector(todoListSelector);
//   const dispatch = useDispatch();
//   const [todoTitle, setTodoTitle] = useState<string>("");
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleCurrentTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTodoTitle(e.target.value);
//   };
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     dispatch(addTodo(todoTitle));
//     setTodoTitle("");

//     inputRef.current?.focus();
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="todo">Buy</label>
//         <input
//           ref={inputRef}
//           id="todo"
//           type="text"
//           value={todoTitle}
//           onChange={handleCurrentTodoChange}
//           placeholder="Milk"
//         />
//         <button type="submit">➕ Add item</button>
//       </form>
//       <ToDoListComponent todoList={todoList} />
//     </>
//   );
// };

// export default ToDoLists;
