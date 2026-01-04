import AuthStatus from '@/components/auth-status'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      {/* <AuthStatus /> */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Welcome to the Auth Example
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          This is a demonstration of how to implement authentication in a Next.js application using Firebase.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/login"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Sign up <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
