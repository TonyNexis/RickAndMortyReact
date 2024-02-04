import { createSlice } from "@reduxjs/toolkit";

export const PositionOnMainPageSlice = createSlice({
    name: 'positionOnMainPageSlice',
    initialState: {
        position: 0,
    },
    reducers: {
        positionSave: state => {state.position = window.scrollY},
    }
})

export const selectPosition = (state) => state.positionOnMainPageSlice.position;

export const { positionSave } = PositionOnMainPageSlice.actions
export default PositionOnMainPageSlice.reducer