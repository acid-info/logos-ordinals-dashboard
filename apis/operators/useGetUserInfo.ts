import { useQuery, useQueryClient } from '@tanstack/react-query'
import { api } from '../../common/api'

const useQueryOptions = {
  refetchOnWindowFocus: false,
  staleTime: 60 * 1000,
  retry: 1,
}

interface Props {
  walletAddress: string | null
  setUserInfo?: (userInfo: any) => void
}

const useGetUserInfo = ({ walletAddress, setUserInfo }: Props) => {
  const queryKey = ['getUserInfo']
  const queryClient = useQueryClient()

  const fetchData = async () => {
    const token = sessionStorage.getItem('accessToken')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    return await api.get('/user').then((res) => {
      setUserInfo && setUserInfo(res.data)
      return res.data
    })
  }

  const updateCache = (newData: any) => {
    queryClient.setQueryData(queryKey, newData)
  }

  const response = useQuery({
    queryKey: queryKey,
    queryFn: fetchData,
    enabled: !!walletAddress,
    ...useQueryOptions,
  })

  return { ...response, updateCache }
}

export default useGetUserInfo
