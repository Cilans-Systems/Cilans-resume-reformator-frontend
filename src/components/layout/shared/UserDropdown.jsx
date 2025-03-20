'use client'

// React Imports
import { useRef, useState } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

import { useDispatch } from 'react-redux'

// MUI Imports
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Divider from '@mui/material/Divider'
import Fade from '@mui/material/Fade'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { setUser } from '@/redux/rootSlice'
import { SettingUserEdit } from '@/svgIcons/SvgIcons'

// Styled component for badge content
const BadgeContentSpan = styled('span')({
  width: 8,
  height: 8,
  borderRadius: '50%',
  cursor: 'pointer',
  backgroundColor: 'var(--mui-palette-success-main)',
  boxShadow: '0 0 0 2px var(--mui-palette-background-paper)'
})

const user = {
  firstName: 'Resume',
  lastName: 'Reformator',
  email: 'resume.reformator@gmail.com',
  phoneNumber: '9876543210'
}

const UserDropdown = () => {
  // States
  const [open, setOpen] = useState(false)

  // Refs
  const anchorRef = useRef(null)

  // const user = useSelector(selectUser)

  // Hooks
  const router = useRouter()
  const dispatch = useDispatch()

  const handleDropdownOpen = () => {
    !open ? setOpen(true) : setOpen(false)
  }

  const handleDropdownClose = (event, url) => {
    if (url) {
      router.push(url)
    }

    if (anchorRef.current && anchorRef.current.contains(event?.target)) {
      return
    }

    setOpen(false)
  }

  function stringToColor(string) {
    let hash = 0
    let i

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = '#'

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff

      color += `00${value.toString(16)}`.slice(-2)
    }
    /* eslint-enable no-bitwise */

    return color
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name)
      },
      children: name ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}` : ''
    }
  }

  const UserNameAvatar = user ? user.firstName + ' ' + user.lastName : ''

  return (
    <>
      <Avatar
        ref={anchorRef}
        alt={user && user.firstName}
        src='' // image source
        onClick={handleDropdownOpen}
        {...stringAvatar(UserNameAvatar)}
        className='cursor-pointer bs-[50px] is-[50px] uppercase'
        sx={{
          border: '1px solid #1B126C',
          fontWeight: 'bold'
        }}
      />

      <Popper
        open={open}
        transition
        disablePortal
        placement='bottom-end'
        anchorEl={anchorRef.current}
        className='min-is-[240px] !mbs-4 z-[1]'
      >
        {({ TransitionProps, placement }) => (
          <Fade
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-end' ? 'right top' : 'left top'
            }}
          >
            <Paper className='shadow-lg'>
              <ClickAwayListener onClickAway={e => handleDropdownClose(e)}>
                <MenuList sx={{ border: '1px gray #20136D', borderRadius: '5px' }}>
                  <div className='flex items-center plb-2 pli-4 gap-2' tabIndex={-1}>
                    <Avatar
                      alt={user && user.givenName}
                      src=''
                      {...stringAvatar(UserNameAvatar)}
                      className='uppercase'
                      sx={{
                        border: '1px solid #1B126C',
                        fontWeight: 'bold'
                      }}
                    />
                    <div className='flex items-start flex-col'>
                      <Typography className='font-medium capitalize' color='text.primary'>
                        {user && UserNameAvatar}
                      </Typography>
                    </div>
                  </div>
                  <Divider className='mlb-1' />
                  <MenuItem href='/contact' className='gap-3' onClick={e => handleDropdownClose(e, '/profile')}>
                    <SettingUserEdit />
                    <Typography color='text.primary'>Profile</Typography>
                  </MenuItem>
                  <div className='flex items-center plb-2 pli-4'>
                    <Button
                      fullWidth
                      variant='contained'
                      color='error'
                      size='small'
                      endIcon={<i className='ri-logout-box-r-line' />}
                      onClick={e => {
                        localStorage.clear()
                        handleDropdownClose(e, '/login')
                        dispatch(setUser(null))
                      }}
                      sx={{
                        '& .MuiButton-endIcon': { marginInlineStart: 1.5 },
                        background: 'var(--background-blue-figma-btn)'
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default UserDropdown
