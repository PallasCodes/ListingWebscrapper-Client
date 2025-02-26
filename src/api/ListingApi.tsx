import { UserListing } from '@/types/UserListing'
import { api } from '.'
import { useQuery } from 'react-query'

export const useGetMyListings = () => {
  const getMyListings = async (): Promise<UserListing[]> => {
    const { data } = await api.get('/listing')
    return data
  }

  const {
    data: listings,
    isLoading,
    error,
  } = useQuery('fetchMyListings', getMyListings, { refetchInterval: 5000 })

  if (error) {
    console.error(error)
    // TODO: use toast
  }

  return { listings, isLoading }
}
