'use client'

// Third-party Imports
import classnames from 'classnames'
import { useSelector } from 'react-redux'

// Component Imports
import LayoutContent from './components/vertical/LayoutContent'

// Util Imports
import CustomLoader from '@/components/Loader/CustomLoader'
import AuthLayout from './AuthLayout'
import { verticalLayoutClasses } from './utils/layoutClasses'

import { selectLoader } from '@/redux/rootSlice'

const VerticalLayout = props => {
  // Props
  const { navbar, footer, navigation, children } = props
  const loading = useSelector(selectLoader)

  return (
    <div className={classnames(verticalLayoutClasses.root, 'flex flex-auto')}>
      {loading && <CustomLoader />}
      <AuthLayout pageName={'private'}>
        {navigation || null}
        <div className={classnames(verticalLayoutClasses.contentWrapper, 'flex flex-col min-is-0 is-full')}>
          {navbar || null}
          <LayoutContent>{children}</LayoutContent>
        </div>
      </AuthLayout>
    </div>
  )
}

export default VerticalLayout
