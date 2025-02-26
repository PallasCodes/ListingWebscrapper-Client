import { api } from '@/api'
import { User } from '@/types/User'
import React, { createContext, useEffect, useState } from 'react'

const AuthContext = createContext<any>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const user = JSON.parse(storedUser) as User
      setUser(user)
      api.defaults.headers.common.Authorization = `Bearer ${user.token}`
    }
    setLoading(false)
  }, [])

  const loginUser = (userData: any) => {
    setUser(userData)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loginUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
