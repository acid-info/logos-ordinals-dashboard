import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { api } from '../../common/api'

interface StakeRequest {
  operator_id: string
}

interface PinResponse {
  success: boolean
  message: string
}

const postPin = async ({ operator_id }: StakeRequest): Promise<PinResponse> => {
  try {
    const token = sessionStorage.getItem('accessToken')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const response: AxiosResponse<PinResponse> = await api.post(
      `/user/operators/${operator_id}/pin`,
    )

    return response.data
  } catch (error: any) {
    if (error.response) {
      if (error.response.status === 403) {
        alert(
          'Access Denied: You do not have permission to perform this action.',
        )
        throw new Error(
          'Access Denied: You do not have permission to perform this action.',
        )
      }
      if (error.response.status === 404) {
        alert('Operator not found. Please check the operator ID.')
        throw new Error('Operator not found. Please check the operator ID.')
      }
    }
    throw new Error('An unexpected error occurred. Please try again later.')
  }
}

export const usePinOperator = () => {
  return useMutation<PinResponse, Error, StakeRequest>({
    mutationFn: postPin,
  })
}
