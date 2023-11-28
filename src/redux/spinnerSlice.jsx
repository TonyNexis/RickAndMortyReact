import { createSlice } from "@reduxjs/toolkit";

export const SpinnerSlice = createSlice({
    name: 'spinner',
    initialState: {
        display: false,
    },
    reducers: {
        spinnerDisplayOn: state => {state.display = true},
        spinnerDisplayOff: state => {state.display = false},
    }
})

export const spinnerDisplay = (state) => state.spinner.display;

export const { spinnerDisplayOn, spinnerDisplayOff } = SpinnerSlice.actions
export default SpinnerSlice.reducer