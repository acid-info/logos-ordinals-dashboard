import axios, { AxiosError } from 'axios'

export const API_BASE = 'https://exit-test-567058b69f45.herokuapp.com/api'

const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
})

api.interceptors.request.use(
  async (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error: AxiosError) => {
    const originalRequest = error.config

    if (error.response?.status === 401) {
      try {
        const refreshToken = await localStorage.getItem('refreshToken')
        await api
          .post('/token/refresh', {
            refreshToken,
          })
          .then(async (res) => {
            api.defaults.headers.common['Authorization'] =
              'Bearer ' + res.data.token?.accessToken
            return await axios(originalRequest as any)
          })
      } catch (e) {
        // localStorage.setItem('refreshToken', '');
        // deleteCookie('refresh-token');
      }
    }

    if (error.response?.status === 429) {
      return Promise.reject(error)
    }
    return Promise.reject(error)
  },
)

api.defaults.withCredentials = true

export const fetcher = (url: string) => api.get(url).then((res) => res)

export { api }
