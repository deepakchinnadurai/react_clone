import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../container/features/userSlice'

export default configureStore({
  reducer: {
    user: userReducer,
  },
})