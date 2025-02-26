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

const formSchema = z.object({
  url: z.string().url('Invalid URL').nonempty('URL is required'),
  website: z.string().nonempty('Website is required'),
  updateFrequency: z.string().nonempty('UpdateFrecuency is required'),
})

export type RegisterListingFormData = z.infer<typeof formSchema>

type Props = {
  onSave: ({ email, password }: { email: string; password: string }) => void
}

export default function RegisterListingForm({ onSave }: Props) {
  const form = useForm<RegisterListingFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { url: '', website: '', updateFrequency: '' },
  })

  return (
    <Form {...form}>
      {/* <form onSubmit={form.handleSubmit(onSave)}> */}
      <form>
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
                    <SelectItem key={website} value={website}>
                      {website}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="btn-primary w-full">
          Add Listing
        </Button>
      </form>
    </Form>
  )
}
