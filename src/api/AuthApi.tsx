import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import AuthContext from '@/state/AuthContext'
import { api } from '.'

export const useLogin = () => {
  const navigate = useNavigate()
  const { loginUser } = useContext(AuthContext)

  const login = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }): Promise<void> => {
    try {
      const { data } = await api.post('/auth/login', { email, password })

      api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
      const user = JSON.stringify(data)
      localStorage.setItem('user', user)
      loginUser(data)

      navigate('/')
    } catch (error: any) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message)
      }
    }
  }

  return { login }
}
