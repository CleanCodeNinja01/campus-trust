'use server'

import { z } from 'zod'
import { auth } from '@/lib/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { redirect } from 'next/navigation'

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['student', 'tutor']),
})

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export async function signup(prevState: unknown, formData: FormData) {
  const validatedFields = signupSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
    role: formData.get('role'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { email, password, role } = validatedFields.data
  const emailWithRole = `${role}+${email}`

  try {
    await createUserWithEmailAndPassword(auth, emailWithRole, password)
    if (role === 'student') {
      redirect('/student/dashboard')
    } else {
      redirect('/tutor/dashboard')
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        errors: { _form: [e.message] },
      }
    }
    return {
      errors: { _form: ['An unknown error occurred'] },
    }
  }
}

export async function login(prevState: unknown, formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { email, password } = validatedFields.data

  try {
    const studentCredential = await signInWithEmailAndPassword(auth, `student+${email}`, password).catch(() => null)

    if (studentCredential) {
      redirect('/student/dashboard')
    }

    const tutorCredential = await signInWithEmailAndPassword(auth, `tutor+${email}`, password).catch(() => null)

    if (tutorCredential) {
      redirect('/tutor/dashboard')
    }

    return {
      errors: { _form: ['Invalid credentials'] },
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        errors: { _form: [e.message] },
      }
    }
    return {
      errors: { _form: ['An unknown error occurred'] },
    }
  }
}

export async function logout() {
  try {
    await signOut(auth)
    redirect('/login')
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        errors: { _form: [e.message] },
      }
    }
    return {
      errors: { _form: ['An unknown error occurred'] },
    }
  }
}
