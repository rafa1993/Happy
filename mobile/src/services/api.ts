import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.166.0.7:3333',
})

export default api;