import { useDispatch, useSelector } from "react-redux";
import { listSelector, removeItem, toggleItem } from "../../store/store";

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
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Item</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.items.map((item) => (
            <tr key={item.id + item.title}>
              <th>
                <input
                  type="checkbox"
                  name={item.title}
                  id={String(item.id)}
                  checked={item.checked}
                  onChange={handleOnChange}
                  className="checkbox"
                />
              </th>
              <td>{item.title}</td>
              <td>{item.amount}</td>
              <th>
                <button
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                    event.preventDefault();
                    handleRemoveItem(item.id);
                  }}
                  className="btn btn-ghost btn-xs"
                >
                  ╳ <span className="sr-only">Remove item</span>
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default List;
