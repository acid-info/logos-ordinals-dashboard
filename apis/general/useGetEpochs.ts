import { useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '../../common/api'

const useQueryOptions = {
  refetchOnWindowFocus: false,
  staleTime: 60 * 1000,
  retry: 1,
}

export const fetchData = async () => {
  return await api.get('/epochs').then((res) => res.data)
}

interface Props {
  enabled: boolean
}

const useGetEpochs = ({ enabled }: Props) => {
  const queryKey = ['getEpochs']
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

export default useGetEpochs
