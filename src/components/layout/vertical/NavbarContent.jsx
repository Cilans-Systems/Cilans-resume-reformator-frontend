// Next Imports

// MUI Imports

// Third-party Imports
import classnames from 'classnames'

import { Typography } from '@mui/material'

// Component Imports
import UserDropdown from '@components/layout/shared/UserDropdown'
import NavToggle from './NavToggle'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const NavbarContent = () => {
  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
      <div className='flex items-center gap-2 sm:gap-4'>
        <NavToggle />
        <Typography
          sx={{
            fontSize: { xs: '16px !important', sm: '20px !important', md: '24px !important' },
            mr: 2,
            fontWeight: '700 !important',
            color: 'rgba(32, 19, 109, 1)'
          }}
        >
          Welcome To Resume Reformator!
        </Typography>
      </div>
      <div className='flex items-center gap-3'>
        {
          
          // <Link className='flex mie-2' href={`/login`}>
          //   <Typography sx={{ fontSize: { xs: '18px', sm: '20px' }, fontWeight: '700' }}>SignUp</Typography>
          // </Link>
          // <Link className='flex mie-2' href={`/login`}>
          //   <Typography sx={{ fontSize: { xs: '18px', sm: '20px' }, fontWeight: '700' }}>Login</Typography>
          // </Link>
        }
        <UserDropdown />
      </div>
    </div>
  )
}

export default NavbarContent
