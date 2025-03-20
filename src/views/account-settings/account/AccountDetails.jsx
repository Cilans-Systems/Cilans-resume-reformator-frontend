'use client'

// React Imports
import { useState } from 'react'

// MUI Imports

import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import { Avatar, Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// Vars
const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: ''
}

const user = {
  firstName: 'Resume',
  lastName: 'Reformator',
  email: 'resume.reformator@gmail.com',
  phoneNumber: '9876543210'
}

const AccountDetails = () => {
  // States
  const [formData, setFormData] = useState(user)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  // useEffect(() => {
  //   if (user) {
  //     setFormData({
  //       firstName: user.givenName ?? '',
  //       lastName: user.surname ?? '',
  //       email: user.mail ?? '',
  //       phoneNumber: user.mobilePhone ?? ''
  //     })
  //   }
  // }, [user])

  const customStyles = {
    inputFields: {
      '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
        color: 'var(--mui-palette-text-secondary)'
      },
      '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'var(--mui-palette-customColors-inputBorder)'
      }
    }
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
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    }
  }

  const UserNameAvatar = user ? user.firstName + ' ' + user.lastName : ''

  return (
    <Card>
      <CardContent className='mbe-5'>
        <form onSubmit={e => e.preventDefault()}>
          <Box sx={{ display: 'flex', gap: '30px' }}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'start' }, width: '100%' }}>
              <div className='flex flex-col items-center gap-6'>
                <Avatar
                  alt={user && user.givenName}
                  src={''} // image source
                  height={150}
                  width={150}
                  {...stringAvatar(UserNameAvatar)}
                  className='bs-[150px] is-[150px] uppercase rounded'
                  sx={{ fontSize: '35px', fontWeight: 'bold' }}
                />
              </div>
            </Box>
          </Box>
        </form>
      </CardContent>
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='First Name'
                value={formData.firstName}
                InputProps={{
                  readOnly: true
                }}
                sx={customStyles.inputFields}
                placeholder='Enter First Name'
                onChange={e => handleFormChange('firstName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Last Name'
                value={formData.lastName}
                InputProps={{
                  readOnly: true
                }}
                sx={customStyles.inputFields}
                placeholder='Enter Last Name'
                onChange={e => handleFormChange('lastName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Email'
                value={formData.email}
                InputProps={{
                  readOnly: true
                }}
                sx={customStyles.inputFields}
                placeholder='Enter email'
                onChange={e => handleFormChange('email', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Phone Number'
                value={formData.phoneNumber}
                InputProps={{
                  readOnly: true
                }}
                sx={customStyles.inputFields}
                placeholder='Enter Phone Number'
                onChange={e => handleFormChange('phoneNumber', e.target.value)}
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default AccountDetails
