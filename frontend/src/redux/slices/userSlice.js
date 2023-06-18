import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            //remove user from storage
            localStorage.removeItem('user')

            state.user = null;
            console.log('user logged out')
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    login,
    logout
} = userSlice.actions;

export default userSlice.reducer