import Part from './Part'

const Content = ({ course: { name, parts } }) => {
  return (
    <div>
      {parts.map((part, i) => (
        <Part key={i} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

export default Content
