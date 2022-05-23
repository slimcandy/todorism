import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  todoListSelector,
  headingSelector,
  setHeading,
} from "../../store/store";
import { ToDoType } from "../../store/types";

type ToDoLengthType = {
  todoList: ToDoType[];
};
const ToDoLength = ({ todoList }: ToDoLengthType) =>
  todoList.length > 0 ? <>- {todoList.length}</> : <></>;

const HeaderWrapper = ({ children }: any) => <header>{children}</header>;

const Header = () => {
  const todoList = useSelector(todoListSelector);
  const heading = useSelector(headingSelector);
  const dispatch = useDispatch();

  const [formIsOpen, setFormIsOpen] = useState(false);
  const [newHeading, setNewHeading] = useState("");

  const newHeadingInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewHeading(e.target.value);
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setHeading(newHeading));
    setFormIsOpen(false);
    setNewHeading("");
  };

  const formOpenHandler = () => setFormIsOpen(true);

  if (formIsOpen) {
    return (
      <HeaderWrapper>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="newHeadingInput">List name:</label>
          <input
            id="newHeadingInput"
            type="text"
            value={newHeading}
            placeholder={heading}
            onChange={newHeadingInputHandler}
          />
          <button>Save</button>
        </form>
      </HeaderWrapper>
    );
  }

  return (
    <HeaderWrapper>
      <h1>
        {heading} <ToDoLength todoList={todoList} />
        <button onClick={formOpenHandler}>✏️ Edit</button>
      </h1>
    </HeaderWrapper>
  );
};
export default Header;
