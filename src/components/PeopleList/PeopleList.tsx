import { useDispatch } from 'react-redux'
import { removePerson } from '../../store/store'
import { List } from '../../store/types'

export interface PeopleFormProps {
  readonly people: List['people']
}

const PeopleList = ({ people }: PeopleFormProps) => {
  const dispatch = useDispatch()
  const handleRemovePerson = (id: number) => dispatch(removePerson(id))

  if (people.length === 0) {
    return <p>No people</p>
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <tr key={person.id + person.name}>
              <td> {person.name}</td>
              <th>
                <button
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                    event.preventDefault()
                    handleRemovePerson(person.id)
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
                  </svg>{' '}
                  <span className="sr-only">Remove person</span>
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default PeopleList
