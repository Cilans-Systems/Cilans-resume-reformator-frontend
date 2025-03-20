'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Box, Typography } from '@mui/material'

import { globalCustomStyle } from '@/style/style'

// Vars
const initialData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phoneNumber: '+1 (917) 543-9876'
}

const ChangePassword = () => {
  // States
  const [formData, setFormData] = useState(initialData)
  const [fileInput, setFileInput] = useState('')
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [language, setLanguage] = useState(['English'])

  const handleDelete = value => {
    setLanguage(current => current.filter(item => item !== value))
  }

  const handleChange = event => {
    setLanguage(event.target.value)
  }

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleFileInputChange = file => {
    const reader = new FileReader()
    const { files } = file.target

    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])

      if (reader.result !== null) {
        setFileInput(reader.result)
      }
    }
  }

  const handleFileInputReset = () => {
    setFileInput('')
    setImgSrc('/images/avatars/1.png')
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container alignItems={'center'}>
            <Grid item xs={12} sm={6} sx={{ gap: '20px' }}>
              <Box
                sx={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', px: '20px' }}
              >
                <Box sx={{ maxWidth: '400px' }}>
                  <img
                    src={'/images/pages/change-password-vector.jpg'}
                    alt={'passwordVector'}
                    style={{ width: '100%' }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ gap: '20px' }}>
              <Grid container spacing={6}>
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: { xs: '24px', md: '30px' }, fontWeight: '700', color: '#1F1373' }}>
                    Change Password :
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Old Password'
                    value={formData.oldPassword}
                    placeholder='Old Password'
                    sx={globalCustomStyle.global.inputField}
                    type='password'
                    onChange={e => handleFormChange('oldPassword', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='New Password'
                    value={formData.newPassword}
                    placeholder='New Password'
                    type='password'
                    sx={globalCustomStyle.global.inputField}
                    onChange={e => handleFormChange('newPassword', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Confirm New Password'
                    value={formData.confirmNewPassword}
                    placeholder='Confirm New Password'
                    type='password'
                    sx={globalCustomStyle.global.inputField}
                    onChange={e => handleFormChange('confirmNewPassword', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} className='flex gap-4 flex-wrap'>
                  <Button variant='contained' type='submit' sx={globalCustomStyle.global.btnFigma}>
                    Change Password
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default ChangePassword
