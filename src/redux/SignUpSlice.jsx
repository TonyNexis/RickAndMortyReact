import { createSlice } from "@reduxjs/toolkit";

export const SignUpSlice = createSlice({
    name: 'signUpSlice',
    initialState: {
        display: false,
    },
    reducers: {
        signUpDisplayOn: state => {state.display = true},
        signUpDisplayOff: state => {state.display = false},
    }
})

export const signUpDisplay = (state) => state.signUpSlice.display;

export const { signUpDisplayOn, signUpDisplayOff } = SignUpSlice.actions
export default SignUpSlice.reducer