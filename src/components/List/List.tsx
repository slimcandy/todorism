import { useDispatch, useSelector } from "react-redux";
import { listSelector, toggleItem } from "../../store/store";

const List = () => {
  const list = useSelector(listSelector);
  const dispatch = useDispatch();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    dispatch(toggleItem(Number(id)));
  };

  if (list === null) {
    return <p>List is not found. Try another key.</p>;
  }

  return (
    <ul>
      {list.items.map((item) => (
        <li key={item.id + item.title}>
          <form>
            <input
              type="checkbox"
              name={item.title}
              id={String(item.id)}
              checked={item.checked}
              onChange={handleOnChange}
            />
            <label htmlFor={`check-${item.title}`}>
              {item.title} - <small>{item.amount}</small>
            </label>
          </form>
        </li>
      ))}
    </ul>
  );
};

export default List;
