import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addPerson } from "../../store/store";
import { Person } from "../../store/types";

const PeopleForm = () => {
  const dispatch = useDispatch();
  const [personName, setPersonName] = useState<Person["name"]>("");
  const personRef = useRef<HTMLInputElement>(null);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonName(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const person: Person = {
      id: Date.now(),
      name: personName,
    };
    dispatch(addPerson(person));
    setPersonName("");

    personRef.current?.focus();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name</label>
      <input
        ref={personRef}
        id="name"
        type="text"
        autoComplete="name"
        value={personName}
        onChange={handleNameChange}
        placeholder="Mike"
      />
      <button type="submit">➕ Add</button>
    </form>
  );
};

export default PeopleForm;
