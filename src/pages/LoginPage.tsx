import LoginForm from '@/forms/LoginForm'
import { useLogin } from '@/api/AuthApi'

export default function LoginPage() {
  const { login } = useLogin()

  function loginUser({ email, password }: { email: string; password: string }) {
      login({ email, password })
      
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-16">Login</h1>

      <div className="max-w-sm mx-auto mt-10">
        <LoginForm onSave={loginUser} />
      </div>
    </div>
  )
}
