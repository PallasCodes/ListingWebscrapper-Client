import { Navigate, Route, Routes } from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import Layout from './Layout'
import ProtectedRoute from './ProtectedRoute'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
      </Route>
      <Route
        path="/login"
        element={
          <Layout>
            <LoginPage />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
