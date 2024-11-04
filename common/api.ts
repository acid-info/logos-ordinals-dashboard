import axios, { AxiosError } from 'axios'

export const API_BASE =
  process.env.NEXT_PUBLIC_API_MODE === 'development'
    ? 'https://exit-test-567058b69f45.herokuapp.com/api'
    : 'https://exit.logos.co/api'

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
        const refreshToken = await sessionStorage.getItem('refreshToken')

        await api
          .post('/token/refresh', {
            refresh: refreshToken,
          })
          .then(async (res) => {
            sessionStorage.setItem('accessToken', res.data.access)

            api.defaults.headers.common['Authorization'] =
              'Bearer ' + res.data.access

            return await axios(originalRequest as any)
          })
      } catch (e) {
        console.log('refresh token', e)
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
