import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";
import CharacterDetailsSlice from "./characterDetailsSlice";

const store = configureStore({
    reducer: {
        characters: charactersSlice,
        characterDetails: CharacterDetailsSlice,
    }
})

export default store;