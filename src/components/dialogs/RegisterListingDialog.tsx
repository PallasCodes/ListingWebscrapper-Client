import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from '../ui/dialog'
import { Button } from '../ui/button'
import RegisterListingForm from '@/forms/RegisterListingForm'
import { useRegisterListing } from '@/api/ListingApi'

export default function RegisterListingDialog({
  children,
}: {
  children: React.ReactNode
}) {
  const { isLoading, registerListing } = useRegisterListing()

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white rounded">
        <DialogHeader>
          <DialogTitle>Register Listing</DialogTitle>
        </DialogHeader>
        <div>
          <RegisterListingForm onSave={registerListing} isLoading={isLoading} />
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
