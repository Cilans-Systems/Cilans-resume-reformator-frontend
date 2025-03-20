'use client'

import { useMsal } from '@azure/msal-react'
import { Box, Button, Typography } from '@mui/material'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

import HomeLogo from '@/@core/svg/HomeLogo'
import { setUser } from '@/redux/rootSlice'

const Login = () => {
  const dispatch = useDispatch()
  const { instance, accounts } = useMsal()

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

    //  const UserDetails = {
    //    firstName: 'Meet',
    //    lastName: 'Panchal',
    //    phone: '9876543210',
    //    email: 'panchalmeet432@gmail.com'
    //  }

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

  const GetUserData = async MRes => {

    if (!instance || !MRes.account) {
      console.error('MSAL is not initialized or user is not logged in')

      return
    }

    try {
      const request = {
        scopes: ['user.read'],
        account: MRes.account
      }

      const response = await instance.acquireTokenSilent(request)

      const res = await fetch(process.env.NEXT_PUBLIC_GET_MSAL, {
        headers: {
          Authorization: `Bearer ${response.accessToken}`
        }
      })

      const data = await res.json()

      dispatch(setUser(data))
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
          <Button variant='contained' onClick={handleLogin} className='flex gap-3' sx={{ border: '1px solid' }}>
            <img src='/images/logos/MicrosoftLogo.svg' alt='KyraHome' className='w-[20px]' />
            Microsoft
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Login
