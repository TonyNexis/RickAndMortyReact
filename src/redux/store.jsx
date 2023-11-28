import { configureStore } from "@reduxjs/toolkit";
import CharactersSlice from "./charactersSlice";
import CharacterDetailsSlice from "./characterDetailsSlice";
import SpinnerSlice from "./spinnerSlice";

const store = configureStore({
    reducer: {
        characters: CharactersSlice,
        characterDetails: CharacterDetailsSlice,
        spinner: SpinnerSlice,
    }
})

export default store;