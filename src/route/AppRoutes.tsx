import { Navigate, Route, Routes } from 'react-router-dom'

import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import Layout from '../Layout'
import ProtectedRoute from './ProtectedRoute'
import NoAuthRoute from './NoAuthRoute'

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
      <Route element={<NoAuthRoute />}>
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
