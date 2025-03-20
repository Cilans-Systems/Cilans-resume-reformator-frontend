'use client'

// Third-party Imports
import classnames from 'classnames'

// Util Imports
import { useSelector } from 'react-redux'

import { selectUser } from '@/redux/rootSlice'

import AuthLayout from './AuthLayout'
import { blankLayoutClasses } from './utils/layoutClasses'

const BlankLayout = ({ children }) => {
  const user = useSelector(selectUser)
  
  return (
    <AuthLayout pageName={'public'}>
      {!user && (
        <div className='flex justify-center w-[100vw]'>
          <div className={classnames(blankLayoutClasses.root, 'is-full bs-full max-w-[1400px]')}>{children}</div>
        </div>
      )}
    </AuthLayout>
  )
}

export default BlankLayout
