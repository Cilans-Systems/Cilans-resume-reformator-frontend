// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Style Imports
import '@/app/globals.css'
import { Toaster } from 'react-hot-toast'

// Generated Icon CSS Imports
import ReduxProvider from '@/redux/ReduxProvider'
import '@assets/iconify-icons/generated-icons.css'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export const metadata = {
  title: 'Resume Reformator',
  description:
    'Resume Reformator.'
}

const RootLayout = ({ children }) => {
  // Vars
  const direction = 'ltr'

  return (
    <html id='__next' dir={direction}>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster />
      </body>
    </html>
  )
}

export default RootLayout
