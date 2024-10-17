import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { api } from '../../common/api'

interface StakeRequest {
  operator_id: string
}

interface StakeResponse {
  success: boolean
  message: string
}

const postStake = async ({
  operator_id,
}: StakeRequest): Promise<StakeResponse> => {
  const response: AxiosResponse<StakeResponse> = await api.post(
    `/operators/${operator_id}/stake`,
  )
  return response.data
}

export const useStakeOperator = () => {
  return useMutation<StakeResponse, Error, StakeRequest>({
    mutationFn: postStake,
  })
}
