import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

export default function Course({ course }) {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}
