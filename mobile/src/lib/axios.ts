import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://192.168.15.23:3333'
})