import { useContext } from 'react'

import { Button } from './ui/button'

import AuthContext from '@/state/AuthContext'

export default function Header() {
  const { logout } = useContext(AuthContext)

  return (
    <header>
      <Button onClick={logout}>Logout</Button>
    </header>
  )
}
