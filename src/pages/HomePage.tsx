import { useGetMyListings } from '@/api/ListingApi'
import RegisterListingDialog from '@/components/dialogs/RegisterListingDialog'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const { listings, isLoading } = useGetMyListings()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!listings || listings.length === 0) {
    return (
      <div>
        <p>No listings found</p>
        <RegisterListingDialog>
          <Button>Register listing</Button>
        </RegisterListingDialog>
      </div>
    )
  }

  return (
    <div>
      {listings.map((listing) => (
        <div key={listing.id}>{listing.listing.url}</div>
      ))}
      <br />
      <RegisterListingDialog>
        <Button>Register listing</Button>
      </RegisterListingDialog>
    </div>
  )
}
