const Total = ({ course: { name, parts } }) => {
  const total = parts.reduce(
    (acc, currentValue) => acc + currentValue.exercises,
    0
  )

  return (
    <div>
      <p>
        <b>Number of exercises: {total} </b>
      </p>
    </div>
  )
}

export default Total
