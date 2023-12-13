const Persons = ({ persons, filter, onButtonPress }) => {
  return (
    <div>
      {persons
        .filter(person =>
          person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map(person => {
          return (
            <p key={person.name}>
              {person.name} {person.number}{' '}
              <button onClick={() => onButtonPress(person.id)}>Delete</button>
            </p>
          )
        })}
    </div>
  )
}

export default Persons
