import { configureStore } from '@reduxjs/toolkit'
import workoutReducer from '../slices/workoutSlice';

export default configureStore({
  reducer: {
    workout: workoutReducer,
  }
})