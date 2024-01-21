import { createSlice } from "@reduxjs/toolkit";

export const SignInSlice = createSlice({
    name: 'signInSlice',
    initialState: {
        display: false,
    },
    reducers: {
        signInDisplayOn: state => {state.display = true},
        signInDisplayOff: state => {state.display = false},
    }
})

export const signInDisplay = (state) => state.signInSlice.display;

export const { signInDisplayOn, signInDisplayOff } = SignInSlice.actions
export default SignInSlice.reducer