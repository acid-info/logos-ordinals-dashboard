import { useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '../../common/api'

const useQueryOptions = {
  refetchOnWindowFocus: false,
  staleTime: 60 * 1000,
  retry: 1,
}

interface Props {
  enabled: boolean
}

export const fetchData = async () => {
  return await api.get('/user/xp').then((res) => res.data)
}

const useGetUserXP = ({ enabled }: Props) => {
  const queryKey = ['getUserXP']
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

export default useGetUserXP
