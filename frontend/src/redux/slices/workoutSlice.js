import { createSlice } from '@reduxjs/toolkit'

export const workoutSlice = createSlice({
    name: 'workout',
    initialState: {
        workouts: null,
    },
    reducers: {
        setWorkouts: (state, action) => {
            state.workouts = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    setWorkouts
} = workoutSlice.actions;

export default workoutSlice.reducer