import { useGetMyListings } from '@/api/ListingApi'
import RegisterListingDialog from '@/components/dialogs/RegisterListingDialog'
import ListingCard from '@/components/ListingCard'
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
      {listings.map((userListing) => (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 max-w-6xl">
          <ListingCard key={userListing.id} listing={userListing.listing} />
        </div>
      ))}
      <br />
      <RegisterListingDialog>
        <Button>Register listing</Button>
      </RegisterListingDialog>
    </div>
  )
}
