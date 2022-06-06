import { useDispatch, useSelector } from "react-redux";
import { listSelector, removeItem, toggleItem } from "../../store/store";
import { Button, Input } from "../../ui";

const List = () => {
  const list = useSelector(listSelector);
  const dispatch = useDispatch();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    dispatch(toggleItem(Number(id)));
  };

  const handleRemoveItem = (id: number) => dispatch(removeItem(id));

  if (list === null) {
    return <p>List is not found. Try another key.</p>;
  }

  return (
    <ol>
      {list.items.map((item) => (
        <li key={item.id + item.title}>
          <form className="grid grid-cols-4 w-60 justify-items-center">
            <Input
              type="checkbox"
              name={item.title}
              id={String(item.id)}
              checked={item.checked}
              onChange={handleOnChange}
              className="py-4"
            />
            <label htmlFor={`check-${item.title}`} className="font-thin">
              {item.title} - <small>{item.amount}</small>
            </label>
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                handleRemoveItem(item.id);
              }}
            >
              ❌ <span className="sr-only">Remove item</span>
            </Button>
          </form>
        </li>
      ))}
    </ol>
  );
};

export default List;
