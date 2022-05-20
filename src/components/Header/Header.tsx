import { useSelector } from "react-redux";
import { todoListSelector } from "../../store/store";
import { ToDoType } from "../../store/types";

type ToDoLengthType = {
  todoList: ToDoType[];
};
const ToDoLength = ({ todoList }: ToDoLengthType) =>
  todoList.length > 0 ? <>- {todoList.length}</> : <></>;

const Header = () => {
  const todoList = useSelector(todoListSelector);

  return (
    <header>
      <h1>
        Goods <ToDoLength todoList={todoList} />
      </h1>
    </header>
  );
};
export default Header;
