import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./characterSlice";

const store = configureStore({
    reducer: {
        characters: characterSlice,

    }
})

export default store;