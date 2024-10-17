import { useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '../../common/api'

const useQueryOptions = {
  refetchOnWindowFocus: false,
  staleTime: 60 * 1000,
  retry: 1,
}

export const fetchData = async () => {
  return await api.get('/block/current-btc-block').then((res) => res.data)
}

const useGetCurrentBTCBlock = () => {
  const queryKey = ['getCurrentBTCBlock']
  const queryClient = useQueryClient()

  const updateCache = (newData: any) => {
    queryClient.setQueryData(queryKey, newData)
  }

  const response = useQuery({
    queryKey: queryKey,
    queryFn: fetchData,
    ...useQueryOptions,
  })

  return { ...response, updateCache }
}

export default useGetCurrentBTCBlock
