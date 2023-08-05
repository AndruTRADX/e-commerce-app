import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import devmarketLogo from '../assets/devmarket-logo.png'
import LazyImage from '../common/LazyImage'
import { useAuth } from '../hooks/useAuth'

const Login = ({
  setLogin,
}: {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [haveAcount, sethaveAcount] = useState<boolean>(true)
  const auth = useAuth()

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      name: { value: string }
      email: { value: string }
      password: { value: string }
    }

    const email = target.email.value
    const password = target.password.value

    if (haveAcount === true) {
      auth
        ?.signIn(email, password)
        .then(() => {
          setLogin(true)
        })
        .catch(() => {
          alert('User or Password wrong')
        })
    } else if (haveAcount === false) {
      const name = target.name.value
      void auth
        ?.signUp(email, password, name)
        .then(() => {
          sethaveAcount(true)
        })
        .catch(() => {
          alert('Something went wrong')
        })
    }
  }

  return (
    <main className="flex justify-between min-h-screen">
      <div className="bg-slate-50 flex-[0.5] min-h-screen hidden md:block">
        <LazyImage
          src={devmarketLogo}
          className="w-full h-full object-contain bg-primary"
        />
      </div>
      <div className="bg-white flex justify-center items-center flex-1 md:flex-[0.5] min-h-screen">
        <div className="max-w-[320px] mx-4">
          <h2 className="text-3xl font-semibold text-slate-800">
            {haveAcount ? 'Welcome back!' : 'Create Your Acount!'}
          </h2>
          <p className="text-sm text-slate-500 mt-4">
            Discover a wide selection of products that perfectly fit your needs
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Immerse yourself in a unique shopping experience and find everything
            you're looking for in one place
          </p>

          <form className="flex flex-col mt-8 gap-y-4" onSubmit={login}>
            {!haveAcount && (
              <div className="relative w-full">
                <input
                  placeholder="Pedro Pascal"
                  type="text"
                  className="login-input"
                  name="name"
                />
                <span>
                  <UserIcon className="w-6 h-6 absolute top-2.5 left-3 text-slate-400" />
                </span>
              </div>
            )}

            <div className="relative w-full">
              <input
                placeholder="you@example.com"
                type="email"
                name="email"
                className="login-input"
              />
              <span>
                <EnvelopeIcon className="w-6 h-6 absolute top-2.5 left-3 text-slate-400" />
              </span>
            </div>

            <div className="relative w-full">
              <input
                placeholder="At least 8 characters"
                type="password"
                name="password"
                className="login-input"
              />
              <span>
                <LockClosedIcon className="w-6 h-6 absolute top-2.5 left-3 text-slate-400" />
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-700 py-3 rounded-lg mt-4 text-white font-semibold hover:bg-slate-800"
            >
              {haveAcount ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <div className="flex justify-center items-center text-base text-slate-500 mt-8">
            <p>
              {haveAcount
                ? 'Don´t you have an account?'
                : 'Do you already have an account?'}{' '}
              <span
                className="font-semibold text-secondary cursor-pointer hover:text-secondary/75"
                onClick={() => sethaveAcount((prev) => !prev)}
              >
                {haveAcount ? 'Sign Up' : 'Sign In'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
