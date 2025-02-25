import { UserListing } from '@/types/UserListing'
import { api } from '.'
import { useQuery } from 'react-query'

export const useGetMyListings = () => {
  const getMyListings = async (): Promise<UserListing[]> => {
    console.log(api.defaults)
    const { data } = await api.get('/listing')
    console.log(data)

    return data
  }

  const {
    data: listings,
    isLoading,
    error,
  } = useQuery('fetchMyListings', getMyListings, { refetchInterval: 5000 })

  if (error) {
    console.error(error)
  }

  return { listings, isLoading }
}
