import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
  load: false,
}

const rootSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
    removeUser(state) {
      state.user = null
    },
    setAuthToken(state, action) {
      state.token = action.payload
    },
    removeAuthToken(state) {
      state.token = null
    },
    startLoader(state) {
      state.load = true
    },
    stopLoader(state) {
      state.load = false
    },
  }
})

export const {
  setUser,
  removeUser,
  setAuthToken,
  removeAuthToken,
  startLoader,
  stopLoader
} = rootSlice.actions

export default rootSlice.reducer

export const selectAuthToken = state => state.token

export const selectUser = state => state.user

export const selectLoader = state => state.load