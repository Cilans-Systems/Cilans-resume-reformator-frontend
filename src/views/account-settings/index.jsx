'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import { useSelector } from 'react-redux'

import { selectUser } from '@/redux/rootSlice'

const AccountSettings = ({ tabContentList }) => {
  // States
  const [activeTab, setActiveTab] = useState('account')
  const user = useSelector(selectUser)

  const handleChange = (event, value) => {
    setActiveTab(value)
  }

  return (
    user && (
      <TabContext value={activeTab}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <TabList onChange={handleChange} variant='scrollable'>
              <Tab
                label='User Profile'
                icon={<i className='ri-user-3-line' />}
                iconPosition='start'
                value='account'
                sx={{
                  color: '#1B126C !important',
                  '&:hover': {
                    paddingBlockEnd: '0.4rem !important',
                    color: '#1B126C !important'
                  }
                }}
              />
            </TabList>
          </Grid>
          <Grid item xs={12}>
            <TabPanel value={activeTab} className='p-0'>
              {tabContentList[activeTab]}
            </TabPanel>
          </Grid>
        </Grid>
      </TabContext>
    )
  )
}

export default AccountSettings
