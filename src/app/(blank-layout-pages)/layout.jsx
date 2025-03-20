// Component Imports
import Header from '@/components/LandingPage/Header'
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'

const Layout = ({ children }) => {
  // Vars
  const direction = 'ltr'

  return (
    <Providers direction={direction}>
      <BlankLayout>
        <Header />
        {children}
      </BlankLayout>
    </Providers>
  )
}

export default Layout
