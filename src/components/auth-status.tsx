'use client'

import { useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { logout } from '@/app/actions'
import Link from 'next/link'

export default function AuthStatus() {
  const [user, setUser] = useState<User | null>(null)
  const [role, setRole] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      if (user && user.email) {
        const roleFromEmail = user.email.split('+')[0]
        setRole(roleFromEmail)
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <div className="flex items-center space-x-4">
      {user ? (
        <div className="flex items-center space-x-4">
          <p className="text-sm">
            Signed in as {user.email?.split('+')[1]} ({role})
          </p>
          <form action={logout}>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              type="submit"
            >
              Log Out
            </button>
          </form>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hover:text-gray-300">
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  )
}
