import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './slices/location'
export default configureStore({
  reducer: {
    location:locationReducer
  },
})