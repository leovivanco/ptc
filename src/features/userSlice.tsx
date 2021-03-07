import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

export type User = {
  email: string
  name: string
  photo: string
  uid: string
}

const initialState = {
  user: null as User | null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    }
  }
})

export const { login, logout } = userSlice.actions
export const selectUser = (state: RootState) => state.user.user
export default userSlice.reducer
