import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { api } from '../../common/api'

interface CallSignUpdateRequest {
  call_sign: string
}

interface CallSignUpdateResponse {
  success: boolean
  message: string
}

const updateCallSign = async ({
  call_sign,
}: CallSignUpdateRequest): Promise<CallSignUpdateResponse> => {
  try {
    const token = sessionStorage.getItem('accessToken')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const body = {
      call_sign,
    }

    const response: AxiosResponse<CallSignUpdateResponse> = await api.put(
      `/user/call-sign/update`,
      body,
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
        alert('User not found. Please check the wallet address.')
        throw new Error('User not found. Please check the owallet address.')
      }
    }
    throw new Error('An unexpected error occurred. Please try again later.')
  }
}

export const useUpdateCallSign = () => {
  return useMutation<CallSignUpdateResponse, Error, CallSignUpdateRequest>({
    mutationFn: updateCallSign,
  })
}
