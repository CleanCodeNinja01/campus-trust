'use client'

import Link from 'next/link'
import AuthStatus from './auth-status'

export default function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-lg shadow-lg text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold">
          CampusTrust
        </Link>
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
             <AuthStatus />
          </ul>
        </nav>
      </div>
    </header>
  )
}
