import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getCountryByName = async countryName => {
  const response = await axios.get(`${baseUrl}/name/${countryName}`)
  return response.data
}

const getAllCountries = async () => {
  const response = await axios.get(`${baseUrl}/all`)
  return response.data
}

export default {
  getCountryByName,
  getAllCountries,
}
