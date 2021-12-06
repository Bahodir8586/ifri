import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://127.0.0.1:3000/api/',
})

export default instance
