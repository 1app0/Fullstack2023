import Part from './Part'

const Content = ({
  course: {
    name,
    parts: [
      { name: name1, exercises: ex1 },
      { name: name2, exercises: ex2 },
      { name: name3, exercises: ex3 },
    ],
  },
}) => {
  return (
    <div>
      <Part part={name1} exercises={ex1} />
      <Part part={name2} exercises={ex2} />
      <Part part={name3} exercises={ex3} />
    </div>
  )
}

export default Content
