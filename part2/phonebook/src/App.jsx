import { useState, useEffect } from 'react'
import apiHelper from './apiHelper'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await apiHelper.fetchPersons()
      setPersons(result)
    }
    fetchData()
  }, [])

  const handleNewNameChange = event => setNewName(event.target.value)

  const handleNewNumberChange = event => setNewNumber(event.target.value)

  const handleFilterChange = event => setFilteredName(event.target.value)

  const addPerson = async event => {
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

    const result = await apiHelper.savePerson(newPerson)
    setPersons(persons.concat(result))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        Filter by <Filter onChange={handleFilterChange} value={filteredName} />
      </p>
      <h2>Add a new person</h2>
      <Form
        addPerson={addPerson}
        handleNewNameChange={handleNewNameChange}
        handleNewNumberChange={handleNewNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Phonebook</h2>
      <Persons persons={persons} filter={filteredName} />
    </div>
  )
}

export default App
