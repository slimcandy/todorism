import { useDispatch } from "react-redux";
import { removePerson } from "../../store/store";
import { List } from "../../store/types";

export interface PeopleFormProps {
  readonly people: List["people"];
}

const PeopleList = ({ people }: PeopleFormProps) => {
  const dispatch = useDispatch();
  const handleRemovePerson = (id: number) => dispatch(removePerson(id));

  if (people.length === 0) {
    return <p>No people</p>;
  }

  return (
    <ol>
      {people.map((person) => (
        <li key={person.id + person.name}>
          {person.name}
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              event.preventDefault();
              handleRemovePerson(person.id);
            }}
          >
            ❌ Remove person
          </button>
        </li>
      ))}
    </ol>
  );
};

export default PeopleList;
