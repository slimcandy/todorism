import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPerson } from '../../store/store'
import { Person } from '../../store/types'

const PeopleForm = () => {
  const dispatch = useDispatch()
  const [personName, setPersonName] = useState<Person['name']>('')
  const personRef = useRef<HTMLInputElement>(null)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonName(event.target.value)
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const person: Person = {
      id: Date.now(),
      name: personName
    }
    dispatch(addPerson(person))
    setPersonName('')

    personRef.current?.focus()
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex my-4 justify-center w-full gap-2"
    >
      <label htmlFor="name" className="sr-only">
        Name
      </label>
      <input
        ref={personRef}
        id="name"
        type="text"
        autoComplete="name"
        value={personName}
        onChange={handleNameChange}
        placeholder="Mike"
        className="input input-bordered w-full max-w-xs"
      />
      <button type="submit" className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="h-6 w-6"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
        <span className="sr-only">Add</span>
      </button>
    </form>
  )
}

export default PeopleForm
