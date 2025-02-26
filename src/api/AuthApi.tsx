import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { api } from '.'

export const useLogin = () => {
  const navigate = useNavigate()

  const login = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }): Promise<void> => {
    try {
      await api.post('/auth/login', { email, password })
      navigate('/')
    } catch (error: any) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message)
      }
    }
  }

  return { login }
}
