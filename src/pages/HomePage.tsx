import { useGetMyListings } from '@/api/ListingApi'

export default function HomePage() {
  const { listings, isLoading } = useGetMyListings()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!listings || listings.length === 0) {
    return <p>No listings found</p>
  }

  return (
    <div>
      {listings.map((listing) => (
        <div key={listing.id}>{listing.listing.url}</div>
      ))}
    </div>
  )
}
