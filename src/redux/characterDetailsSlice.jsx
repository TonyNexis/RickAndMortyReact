import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spinnerDisplayOn, spinnerDisplayOff } from "./spinnerSlice";


const apiUrl = 'https://rickandmortyapi.com/api/character';

export const fetchCharacterDetails = createAsyncThunk('comments/fetchCharacterDetails', async (id, { dispatch }) => {
    try {
      dispatch(spinnerDisplayOn());
      const response = await fetch(`${apiUrl}/${id}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      console.log(jsonData)
      dispatch(spinnerDisplayOff());
      return jsonData;
    } catch (error) {
      console.log(error);
    }
  });

export const CharacterDetailsSlice = createSlice({
    name: 'characterDetails',
    initialState: {
      characterData: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacterDetails.fulfilled, (state, action) => {
                state.characterData = action.payload;
                console.log('fulfilled status');
            })
            .addCase(fetchCharacterDetails.pending, (state, action) => {
                console.log('pending status');
            })
            .addCase(fetchCharacterDetails.rejected, (state, action) => {
                console.log('rejected status');
            });
    },
});

  export default CharacterDetailsSlice.reducer;