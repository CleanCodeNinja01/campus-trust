'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { signup } from '@/app/actions'
import '../auth.css'

export default function Signup() {
  const [state, formAction] = useActionState(signup, null)

  return (
    <main className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Create an Account</h1>
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
          <div className="flex justify-around">
            <label className="auth-label">
              <input type="radio" name="role" value="student" className="mr-2" required/>
              Student
            </label>
            <label className="auth-label">
              <input type="radio" name="role" value="tutor" className="mr-2" />
              Tutor
            </label>
          </div>
           {state?.errors && 'role' in state.errors && state.errors.role && (
              <p className="text-red-400 text-xs mt-1">{state.errors.role.join(', ')}</p>
            )}
          {state?.errors?._form && <p className="text-red-400 text-xs mt-1">{state.errors._form.join(', ')}</p>}
          <button
            className="auth-button"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="auth-link mt-4">
          Already have an account?{' '}
          <Link href="/login">
            Login
          </Link>
        </p>
      </div>
    </main>
  )
}
