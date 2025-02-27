import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { OriginWebsitesCat } from '@/types/OriginWebsites'
import { updateFrequency } from '@/types/UpdateFrequency'

const formSchema = z.object({
  url: z.string().url('Invalid URL').nonempty('URL is required'),
  website: z.string().nonempty('Website is required'),
  updateFrequency: z.number().min(1, 'updateFrequency is required'),
})

export type RegisterListingFormData = z.infer<typeof formSchema>

type Props = {
  onSave: (payload: RegisterListingFormData) => void
  isLoading: boolean
}

export default function RegisterListingForm({ onSave, isLoading }: Props) {
  const form = useForm<RegisterListingFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { url: '', website: '', updateFrequency: 24 },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSave)}>
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  {OriginWebsitesCat.map((website) => (
                    <SelectItem key={website.value} value={website.value}>
                      {website.text}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="updateFrequency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Update Frequency (hours)</FormLabel>
              <Select
                onValueChange={(value) => field.onChange(Number(value))}
                defaultValue={field.value?.toString()}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  {updateFrequency.map((frequency) => (
                    <SelectItem
                      className="cursor-pointer hover:bg-red-500 w-full block"
                      key={frequency.toString()}
                      value={frequency.toString()}
                    >
                      {frequency.toString()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {!isLoading && (
          <Button type="submit" className="btn-primary w-full">
            Add Listing
          </Button>
        )}
        {isLoading && (
          <Button disabled className="btn-primary w-full">
            Loading...
          </Button>
        )}
      </form>
    </Form>
  )
}
