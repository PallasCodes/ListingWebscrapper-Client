import { UserListing } from '@/types/UserListing'
import { api } from '.'
import { useMutation, useQuery } from 'react-query'
import { toast } from 'sonner'
import { RegisterListingFormData } from '@/forms/RegisterListingForm'

export const useGetMyListings = () => {
  const getMyListings = async (): Promise<UserListing[]> => {
    const { data } = await api.get('/listing')
    return data
  }

  const { data: listings, isLoading, error } = useQuery('fetchMyListings', getMyListings)

  if (error) {
    console.error(error)
    // TODO: use toast
  }

  return { listings, isLoading }
}

export const useRegisterListing = () => {
  const registerListingRequest = async (
    payload: RegisterListingFormData,
  ): Promise<void> => {
    try {
      await api.post('/listing', payload)
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message ||
          'There was an error while registering the  listing. Try again later',
      )
    }
  }

  const {
    mutateAsync: registerListing,
    isLoading,
    error,
    reset,
  } = useMutation(registerListingRequest)

  if (error) {
    toast.error(error.toString())
    reset()
  }

  return { registerListing, isLoading }
}
