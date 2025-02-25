import LoginForm from '@/forms/LoginForm'

export default function LoginPage() {
  function login() {
    console.log('login')
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-16">Login</h1>

      <div className="max-w-sm mx-auto mt-10">
        <LoginForm onSave={login} />
      </div>
    </div>
  )
}
