'use client'

// Third-party Imports
import styled from '@emotion/styled'

// Component Imports
import MaterioLogo from '@core/svg/Logo'

// Config Imports
import themeConfig from '@configs/themeConfig'

const LogoText = styled.span`
  color: ${({ color }) => color ?? '#ffffff'};
  font-size: 1.35rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: 0.35px;
  /* text-transform: capitalize; */
  margin-inline-start: 10px;
`

const Logo = ({ color }) => {
  return (
    <div className='flex items-center min-bs-[24px]'>
     <MaterioLogo className='text-[22px] text-primary w-[175px]' />
    </div>
  )
}

export default Logo
