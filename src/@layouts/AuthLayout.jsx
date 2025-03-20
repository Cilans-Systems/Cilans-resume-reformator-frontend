'use client'
import { useEffect } from 'react'

import { useRouter } from 'next/navigation'

import { useSelector } from 'react-redux'

import { selectUser } from '@/redux/rootSlice'

const AccessRoute = ['private']

const AuthLayout = ({ children, pageName }) => {
  // ** Hooks
  const router = useRouter()

  const user = useSelector(selectUser)

  const haveAccess = AccessRoute?.includes(pageName)

  useEffect(() => {
    if (!user) {
      router.push('/login')
    } else if (user && !haveAccess) {
      router.push('/')
    }
  }, [user, haveAccess, router])

  return children
}

export default AuthLayout
