import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name: 'modal',
    initialState: {
        display: false,
    },
    reducers: {
        modalDisplayOn: state => {state.display = true},
        modalDisplayOff: state => {state.display = false},
    }
})

export const modalDisplay = (state) => state.modal.display;

export const { modalDisplayOn, modalDisplayOff } = ModalSlice.actions
export default ModalSlice.reducer