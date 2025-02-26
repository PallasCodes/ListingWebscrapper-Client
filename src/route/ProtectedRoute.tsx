import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import AuthContext from '../state/AuthContext'

export default function ProtectedRoute() {
  const { user, loading } = useContext(AuthContext)

  if (loading) return null

  if (user) return <Outlet />

  return <Navigate to="/login" replace />
}
