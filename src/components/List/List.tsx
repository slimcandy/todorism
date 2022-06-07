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
      <table className="table table-zebra w-full" data-test="list-items">
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
                  className="btn btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="h-6 w-6"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                  <span className="sr-only">Remove item</span>
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
