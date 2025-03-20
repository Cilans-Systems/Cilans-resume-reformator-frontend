'use client'
import Link from 'next/link'

import styled from '@emotion/styled'

import { Box } from '@mui/material'

import HomeLogo from '@/@core/svg/HomeLogo'

const LogoText = styled.span`
  color: ${({ color }) => color ?? '#ffffff'};
  font-size: 1.35rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.35px;
  /* text-transform: capitalize; */
  margin-inline-start: 10px;
`

const Header = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '15px 10px' }}>
      <HomeLogo className='text-[22px] text-primary max-w-[100px]' />
      <div className='flex items-center gap-[40px] mr-4 text-black'>
        <Link href='/login'>
          <p className='cursor-pointer font-[600] sm:text-[20px]' style={{ color: 'var(--mui-palette-text-primary)' }}>
            Login
          </p>
        </Link>
      </div>
    </Box>
  )
}

export default Header
