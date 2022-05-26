import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  currentUserIdSelector,
  peopleSelector,
  setCurrentUserId,
} from "../../store/store";

const CurrentUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(-1);

  const currentUserId = useSelector(currentUserIdSelector);
  const people = useSelector(peopleSelector);
  const dispatch = useDispatch();

  const selectRef = useRef(null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const index = parseInt(value, 10);
    setSelectedId(index);
  };
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(false);
    if (selectedId > -1) dispatch(setCurrentUserId(selectedId));
  };

  useEffect(() => {
    setIsOpen(people.length > 0 && currentUserId === null);

    const [defaultUser] = people;
    if (defaultUser && defaultUser.id > 0) setSelectedId(defaultUser.id);
  }, [currentUserId, dispatch, people]);

  return (
    <dialog open={isOpen}>
      <form method="dialog" onSubmit={handleSubmitForm}>
        <label htmlFor="currentUser">Who are you?</label>
        <select ref={selectRef} onChange={handleSelectChange}>
          {people.map((person) => (
            <option key={person.id} value={person.id}>
              {person.name}
            </option>
          ))}
        </select>

        <button type="submit">Continue</button>
      </form>
    </dialog>
  );
};

export default CurrentUser;
