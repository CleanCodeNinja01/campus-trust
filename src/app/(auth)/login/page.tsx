'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { login } from '@/app/actions'
import '../auth.css'

export default function Login() {
  const [state, formAction] = useActionState(login, null)

  return (
    <main className="p-4">
      <div className="auth-card">
        <h1 className="auth-title">Welcome Back</h1>
        <form action={formAction} className="auth-form">
          <div>
            <label className="auth-label" htmlFor="email">
              Email
            </label>
            <input
              className="auth-input"
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
            {state?.errors && 'email' in state.errors && state.errors.email && (
              <p className="text-red-400 text-xs mt-1">{state.errors.email.join(', ')}</p>
            )}
          </div>
          <div>
            <label className="auth-label" htmlFor="password">
              Password
            </label>
            <input
              className="auth-input"
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
            />
            {state?.errors && 'password' in state.errors && state.errors.password && (
              <p className="text-red-400 text-xs mt-1">{state.errors.password.join(', ')}</p>
            )}
          </div>
           {state?.errors?._form && <p className="text-red-400 text-xs mt-1">{state.errors._form.join(', ')}</p>}
          <button
            className="auth-button"
            type="submit"
          >
            Login
          </button>
        </form>
         <p className="auth-link mt-4">
            Don&apos;t have an account?{' '}
            <Link href="/signup">
              Sign up
            </Link>
          </p>
      </div>
    </main>
  )
}
