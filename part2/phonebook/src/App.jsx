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

    if (!newName || !newNumber) {
      alert('Please input name and number')
      return
    }

    const repeatedPerson = persons.find(person => person.name === newName)
    if (repeatedPerson) {
      if (newNumber !== repeatedPerson.number) {
        const result = confirm(
          `${newName} is already added to the phonebook, replace the old number with the new one?`
        )

        if (result) {
          const foundPerson = persons.find(person => person.name === newName)
          const newPerson = { ...foundPerson, number: newNumber }
          const returnedPerson = await apiHelper.updatePerson(newPerson)

          setPersons(
            persons.map(person =>
              person.name === returnedPerson.name ? returnedPerson : person
            )
          )
          setNewName('')
          setNewNumber('')
        }

        return
      }
      setNewName('')
      setNewNumber('')
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

  const deletePerson = async id => {
    const personToDelete = persons.find(person => person.id === id)
    if (!personToDelete) {
      alert('This person has already been deleted')
      const updatedPersons = persons.filter(person => person.id !== id)
      setPersons(updatedPersons)
    }

    await apiHelper.deletePerson(personToDelete.id)
    const updatedPersons = persons.filter(person => person.id !== id)
    setPersons(updatedPersons)
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
      <Persons
        persons={persons}
        filter={filteredName}
        onButtonPress={deletePerson}
      />
    </div>
  )
}

export default App
