import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { listSelector } from "../../store/store";
import { Person } from "../../store/types";
import { pullLocalStorage, pushLocalStorage } from "../../utils/localStorage";

const localStorageKey = "currentUserIdMemory";

const CurrentUser = () => {
  const list = useSelector(listSelector);
  const [userId, setUserId] = useState<Person["id"]>();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id = event.target.value;
    setUserId(Number(id));
    pushLocalStorage(localStorageKey, id);
  };

  useEffect(() => {
    pullLocalStorage(localStorageKey)
      .then(
        (id) => typeof id == "string" && id.length > 0 && setUserId(Number(id))
      )
      .catch(console.error);
  }, []);

  if (list === null) {
    return <p>Add people to assign items</p>;
  }

  return (
    <select
      name="currentUser"
      id="currentUser"
      onChange={handleChange}
      className="text-slate-600 hover:text-slate-700 rounded-md py-2 px-1 focus:shadow-sm border-2 border-slate-300 hover:border-slate-400 focus:outline-none focus:border-slate-600 cursor-pointer"
    >
      <option value="">Select a person</option>
      {list.people.map((person) => (
        <option
          key={person.id}
          value={person.id}
          selected={userId === person.id}
        >
          {person.name}
        </option>
      ))}
    </select>
  );
};

export default CurrentUser;
