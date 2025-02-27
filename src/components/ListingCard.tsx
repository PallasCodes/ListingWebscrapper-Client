import { Listing } from '@/types/Listing'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface Props {
  listing: Listing
}

export default function ListingCard({ listing }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{listing.productTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={listing.imgUrl} />
      </CardContent>
    </Card>
  )
}
