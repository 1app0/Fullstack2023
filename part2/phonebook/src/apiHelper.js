import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const fetchPersons = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const savePerson = async person => {
  const response = await axios.post(baseUrl, person)
  return response.data
}

export default {
  fetchPersons,
  savePerson,
}
