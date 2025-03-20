'use client'
import { useState } from 'react'

import { useMsal } from '@azure/msal-react'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

import HomeLogo from '@/@core/svg/HomeLogo'
import { setUser } from '@/redux/rootSlice'

const Login = () => {
  const dispatch = useDispatch()
  const { instance, accounts } = useMsal()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    instance
      .loginPopup({
        scopes: ['user.read'],
        prompt: 'select_account'
      })
      .then(response => {
        GetUserData(response)
        notify()
      })
      .catch(error => {
        console.error('Login failed: ', error)
      })

    //  dispatch(setUser(UserDetails))
    //  await router.push('/')
  }

  // const GetUserData = async() => {
  //   const request = {
  //     scopes: ['user.read'],
  //     account: accounts[0]
  //   }

  //   await instance.acquireTokenSilent(request).then(response => {
  //     fetch(process.env.NEXT_PUBLIC_GET_MSAL, {
  //       headers: {
  //         Authorization: `Bearer ${response.accessToken}`
  //       }
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         setUserData(data)
  //         dispatch(setUser(data))
  //       })
  //   })
  // }

  const userdata = {
    firstName: 'Resume',
    lastName: 'Reformator',
    email: 'resume.reformator@gmail.com',
    phoneNumber: '9876543210'
  }

  const GetUserData = () => {
    try {
      dispatch(setUser(userdata))
    } catch (error) {
      console.error('Error acquiring token silently: ', error)
    }
  }

  const notify = () => {
    toast.success('Login successful', {
      type: 'success', // can be 'info', 'success', 'warning', 'error', or 'default'
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true
    })
  }

  // useEffect(() => {
  //   if (accounts && accounts.length > 0) {
  //     GetUserData()
  //   }
  // }, [accounts])

  return (
    <Box sx={{ height: 'calc(100vh - 86px)' }}>
      <Box
        sx={{
          height: '100%',
          p: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: '440px',
            width: '100%',
            p: '30px',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
          }}
        >
          <HomeLogo className='text-[22px] text-primary w-[150px]' />

          <Typography variant='h3' sx={{ fontWeight: '700' }}>
            Login
          </Typography>
          <Typography variant='h6'>Login with your Microsoft Account</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={name}
                placeholder='Enter Email'
                onChange={e => {
                  setName(e.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={password}
                type='password'
                placeholder='Password'
                onChange={e => {
                  setPassword(e.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                fullWidth
                variant='contained'
                onClick={GetUserData}
                className='flex gap-3'
                sx={{ border: '1px solid', color: 'white', background: '#27307D !important' }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default Login
