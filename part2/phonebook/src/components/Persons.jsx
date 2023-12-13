const Persons = ({ persons, filter }) => {
  return (
    <div>
      {persons
        .filter(person =>
          person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
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

export default Persons
