import { useQuery, useQueryClient } from '@tanstack/react-query'
import operators from '../../data/operators.json'
// import { api } from '../../common/api'

const useQueryOptions = {
  refetchOnWindowFocus: false,
  staleTime: 60 * 1000,
  retry: 1,
}

export const fetchData = async () => {
  return operators
  // return await api.get('/operators').then((res) => res.data)
}

const useGetOperators = () => {
  const queryKey = ['getOperators']
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

export default useGetOperators
