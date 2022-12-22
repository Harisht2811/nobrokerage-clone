import { configureStore } from '@reduxjs/toolkit'
import  useReducer  from './createslice'

export default configureStore({
  reducer: {
    user:useReducer,
  },
})