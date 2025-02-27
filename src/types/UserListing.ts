import { Listing } from './Listing'

export interface UserListing {
  id?: string
  updateFrequency: number
  listing: Listing
}
