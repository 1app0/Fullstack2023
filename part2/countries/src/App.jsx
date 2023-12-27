import { useEffect, useState } from 'react'
import apiHelper from './apiHelper'
import Filter from './components/Filter'
import Country from './components/Country'

export default function App() {
  const [countryFilterValue, setCountryFilterValue] = useState('')
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await apiHelper.getAllCountries()
      setCountries(result)
    }

    fetchData()
  }, [])

  const handleCountryFilterChange = event =>
    setCountryFilterValue(event.target.value)

  return (
    <div>
      find countries:{' '}
      <Filter onChange={handleCountryFilterChange} value={countryFilterValue} />
      <Country countries={countries} filter={countryFilterValue} />
    </div>
  )
}
