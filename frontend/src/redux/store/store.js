import { configureStore } from '@reduxjs/toolkit'
import workoutReducer from '../slices/workoutSlice';
import userReducer from '../slices/userSlice';

export default configureStore({
  reducer: {
    workout: workoutReducer,
    user: userReducer
  }
})