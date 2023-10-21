import { useState } from 'react'

const Button = ({ handleClick, buttonText }) => {
  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  )
}

const Header = ({ headerText }) => <h1>{headerText}</h1>

const StatisticLine = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good + neutral + bad) / 3
  const goodPercentage = `${(good / total) * 100}%`

  if (good || neutral || bad) {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine text={'good'} value={good} />
        <StatisticLine text={'neutral'} value={neutral} />
        <StatisticLine text={'bad'} value={bad} />
        <StatisticLine text={'all'} value={total} />
        <StatisticLine text={'average'} value={average} />
        <StatisticLine text={'positive'} value={goodPercentage} />
      </div>
    )
  } else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
}

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onGoodClick = () => setGood(good + 1)

  const onNeutralClick = () => setNeutral(neutral + 1)

  const onBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Header headerText={'give feedback'} />
      <Button handleClick={onGoodClick} buttonText={'good'} />
      <Button handleClick={onNeutralClick} buttonText={'neutral'} />
      <Button handleClick={onBadClick} buttonText={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
