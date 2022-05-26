import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPerson, peopleSelector, removePerson } from "../../store/store";
import { Person } from "../../store/types";

const People = () => {
  const people = useSelector(peopleSelector);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const [newPerson, setNewPerson] = useState<Person["name"]>("");
  const newPersonChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPerson(e.target.value);
  };
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPerson(newPerson));
    setNewPerson("");

    inputRef.current?.focus();
  };
  const handleRemovePerson = (id: Person["id"]) => dispatch(removePerson(id));

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
