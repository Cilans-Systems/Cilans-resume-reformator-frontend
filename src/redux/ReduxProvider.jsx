'use client'

import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import { MsalProvider } from '@azure/msal-react'

import msalInstance from '@/msalConfig'


import store, { persistor } from './store'

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MsalProvider instance={msalInstance}>{children}</MsalProvider>
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider
