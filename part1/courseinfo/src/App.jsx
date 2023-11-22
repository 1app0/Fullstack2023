import Header from './Header'
import Content from './Content'
import Total from './Total'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

export default function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  const promiseOptions = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(options)
      }, 1000)
    })
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <AsyncSelect loadOptions={promiseOptions} defaultOptions={true} />
    </div>
  )
}
