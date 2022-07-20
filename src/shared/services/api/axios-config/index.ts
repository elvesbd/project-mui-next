import axios from 'axios'
import { Environments } from '../../../environment'
import { errorInterceptor, responseInterceptor } from './interceptors'

const api = axios.create({
  baseURL: Environments.URL_BASE,
})

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
)

export { api }
