import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Alex Vasilianov', number: '213423q421' },
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')

  const handleNewNameChange = event => setNewName(event.target.value)

  const handleNewNumberChange = event => setNewNumber(event.target.value)

  const handleFilterChange = event => setFilteredName(event.target.value)

  const addPerson = event => {
    event.preventDefault()

    const repeatedPerson = persons.some(person => person.name === newName)
    if (repeatedPerson) {
      setNewName('')
      alert(`${newName} already exists in the phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter by <input onChange={handleFilterChange} value={filteredName} />
      </p>
      <h2>Add a new person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNewNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNewNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter(person =>
          person.name
            .toLocaleLowerCase()
            .includes(filteredName.toLocaleLowerCase())
        )
        .map(person => {
          return (
            <p key={person.name}>
              {person.name} {person.number}
            </p>
          )
        })}
    </div>
  )
}

export default App
