import { useSelector } from "react-redux";
import { listSelector } from "../../store/store";

const List = () => {
  const list = useSelector(listSelector);

  if (list === null) {
    return <p>List is not found. Try another key.</p>;
  }

  return (
    <ul>
      {list.items.map((item) => (
        <li>
          {item.title} - <small>{item.amount}</small>
        </li>
      ))}
    </ul>
  );
};

export default List;
