import { configureStore } from "@reduxjs/toolkit";
import CharactersSlice from "./charactersSlice";
import CharacterDetailsSlice from "./characterDetailsSlice";
import SpinnerSlice from "./spinnerSlice";
import ModalSlice from "./modalSlice";

const store = configureStore({
    reducer: {
        characters: CharactersSlice,
        characterDetails: CharacterDetailsSlice,
        spinner: SpinnerSlice,
        modal: ModalSlice,
    }
})

export default store;