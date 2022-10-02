import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { listSelector } from "../../../stores/store";
import { Person } from "../../../interfaces";
import {
  pullLocalStorage,
  pushLocalStorage,
} from "../../../utils/localStorage_old";

const localStorageKey = "currentUserIdMemory";

function CurrentUser() {
  const list = useSelector(listSelector);
  const [userId, setUserId] = useState<Person["id"]>();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id = event.target.value;
    setUserId(Number(id));
    void pushLocalStorage(localStorageKey, id);
  };

  useEffect(() => {
    void pullLocalStorage(localStorageKey).then(
      (id) => typeof id === "string" && id.length > 0 && setUserId(Number(id))
    );
  }, []);

  if (!list) {
    return <p>Add people to assign items</p>;
  }

  return (
    <select
      name="currentUser"
      id="currentUser"
      onChange={handleChange}
      className="select select-bordered"
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
}

export default CurrentUser;
