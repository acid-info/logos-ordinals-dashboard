import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { api } from '../../common/api'

interface UnstakeRequest {
  operator_id: string
}

interface UnstakeResponse {
  success: boolean
  message: string
}

const postUnstake = async ({
  operator_id,
}: UnstakeRequest): Promise<UnstakeResponse> => {
  const response: AxiosResponse<UnstakeResponse> = await api.post(
    `/operators/${operator_id}/unstake`,
  )
  return response.data
}

export const useUnstakeOperator = () => {
  return useMutation<UnstakeResponse, Error, UnstakeRequest>({
    mutationFn: postUnstake,
  })
}
