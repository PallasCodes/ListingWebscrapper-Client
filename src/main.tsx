import { createRoot } from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from '@/components/ui/sonner'

import './index.css'
import AppRoutes from './route/AppRoutes.tsx'
import { AuthProvider } from './state/AuthContext'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

createRoot(document.getElementById('root')!).render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
      <Toaster />
    </QueryClientProvider>
  </Router>,
)
