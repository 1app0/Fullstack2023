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

const deletePerson = async id => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

export default {
  fetchPersons,
  savePerson,
  deletePerson,
}
