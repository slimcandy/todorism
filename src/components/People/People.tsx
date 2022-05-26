import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPerson,
  currentUserIdSelector,
  peopleSelector,
  removePerson,
  setCurrentUserId,
} from "../../store/store";
import { Person } from "../../store/types";

const People = () => {
  const people = useSelector(peopleSelector);
  const currentUserId = useSelector(currentUserIdSelector);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const [newPerson, setNewPerson] = useState<Person["name"]>("");
  const [currentUser, setCurrentUser] = useState<Person>();

  const newPersonChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPerson(e.target.value);
  };
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPerson(newPerson));
    setNewPerson("");

    inputRef.current?.focus();
  };
  const handleRemovePerson = (id: Person["id"]) => {
    dispatch(removePerson(id));
    if (currentUserId === id) {
      setCurrentUser(undefined);
      dispatch(setCurrentUserId(null));
    }
  };

  useEffect(() => {
    setCurrentUser(
      people.find((person) => person.id === currentUserId) || undefined
    );
  }, [currentUserId, people]);

  const formTag = (
    <form onSubmit={formSubmitHandler}>
      <input
        type="text"
        value={newPerson}
        onChange={newPersonChangeHandler}
        ref={inputRef}
      />
      <button type="submit">Add</button>
    </form>
  );

  if (!people || people.length === 0) {
    return (
      <>
        <p>No people added</p>
        {formTag}
      </>
    );
  }

  return (
    <dl>
      {currentUser && (
        <>
          <dt>You</dt>
          <dd>{currentUser.name}</dd>
        </>
      )}
      <dt>People</dt>
      <dd>
        <ul>
          {people.map((person) => (
            <li key={person.id}>
              {person.name}
              <button onClick={() => handleRemovePerson(person.id)}>
                ❌ Remove person
              </button>
            </li>
          ))}
        </ul>
      </dd>
      <dt>Add person</dt>
      <dd>{formTag}</dd>
    </dl>
  );
};

export default People;
