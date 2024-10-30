import { useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '../../common/api'

const useQueryOptions = {
  refetchOnWindowFocus: false,
  staleTime: 60 * 1000,
  retry: 1,
}

export const fetchData = async () => {
  return await api.post('/user/referral').then((res) => res.data)
}

interface Props {
  enabled: boolean
}

const usePostUserReferral = ({ enabled }: Props) => {
  const queryKey = ['getUserReferral']
  const queryClient = useQueryClient()

  const updateCache = (newData: any) => {
    queryClient.setQueryData(queryKey, newData)
  }

  const response = useQuery({
    queryKey: queryKey,
    queryFn: fetchData,
    enabled,
    ...useQueryOptions,
  })

  return { ...response, updateCache }
}

export default usePostUserReferral
