import { useContext } from 'react'

import Header from './components/Header'
import AuthContext from './state/AuthContext'

type Props = { children: React.ReactNode }

const layout = ({ children }: Props) => {
  const { user } = useContext(AuthContext)

  return (
    <div className="flex flex-col min-h-screen">
      {user && <Header />}
      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  )
}

export default layout
