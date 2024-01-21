import { configureStore } from '@reduxjs/toolkit'
import SignUpSlice from './SignUpSlice'
import SignInSlice from './SignInSlice'
import CharacterDetailsSlice from './characterDetailsSlice'
import CharactersSlice from './charactersSlice'
import SpinnerSlice from './spinnerSlice'

const store = configureStore({
	reducer: {
		characters: CharactersSlice,
		characterDetails: CharacterDetailsSlice,
		spinner: SpinnerSlice,
		signUpSlice: SignUpSlice,
		signInSlice: SignInSlice,
	},
})

export default store
