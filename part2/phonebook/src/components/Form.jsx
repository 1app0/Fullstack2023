import Filter from './Filter'

const Form = ({
  addPerson,
  handleNewNameChange,
  handleNewNumberChange,
  newName,
  newNumber,
}) => {
  return (
    <div>
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
    </div>
  )
}

export default Form
