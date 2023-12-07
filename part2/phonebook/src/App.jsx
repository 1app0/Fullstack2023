import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Alex Vasilianov' }])
  const [newName, setNewName] = useState('')

  const handleNewNameChange = event => setNewName(event.target.value)

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
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNewNameChange} value={newName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return <p key={person.name}>{person.name}</p>
      })}
    </div>
  )
}

export default App
