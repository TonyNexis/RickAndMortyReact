import { createSlice } from '@reduxjs/toolkit'

export const SignInStatusCheck = createSlice({
	name: 'signInStatusCheck',
	initialState: {
		signIn: false,
	},
	reducers: {
		signInTrue: state => {
			state.signIn = true
		},
		signInFalse: state => {
			state.signIn = false
		},
	},
})

export const signInStatus = (state) => state.signInStatusCheck.signIn;

export const { signInTrue, signInFalse } = SignInStatusCheck.actions;

export default SignInStatusCheck.reducer;
