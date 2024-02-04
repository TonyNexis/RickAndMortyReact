import { configureStore } from '@reduxjs/toolkit'
import SignUpSlice from './signUpSlice'
import SignInSlice from './signInSlice'
import CharacterDetailsSlice from './characterDetailsSlice'
import CharactersSlice from './charactersSlice'
import SpinnerSlice from './spinnerSlice'
import SignInStatusCheck from './signInStatusCheck'
import PositionOnMainPageSlice from './positionOnMainPageSlice'

const store = configureStore({
	reducer: {
		characters: CharactersSlice,
		characterDetails: CharacterDetailsSlice,
		spinner: SpinnerSlice,
		signUpSlice: SignUpSlice,
		signInSlice: SignInSlice,
		signInStatusCheck: SignInStatusCheck,
		positionOnMainPageSlice: PositionOnMainPageSlice,
	},
})

export default store
