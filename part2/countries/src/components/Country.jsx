export default function Country({ countries, filter }) {
  const filteredCountries = countries.filter(country =>
    country.name.common.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  )

  if (filteredCountries.length === 0) {
    return
  }

  if (filteredCountries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }

  if (filteredCountries.length < 10 && filteredCountries.length > 1) {
    return (
      <div>
        {filteredCountries.map(country => (
          <p>{country.name.common}</p>
        ))}
      </div>
    )
  }

  const country = filteredCountries[0]

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <ul>
        {Object.values(country.languages).map(language => (
          <li>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} />
    </div>
  )
}
