import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spinnerDisplayOn, spinnerDisplayOff } from "./spinnerSlice";

// const defaultApiUrl = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = createAsyncThunk('comments/fetchCharacters', async (apiUrl = 'https://rickandmortyapi.com/api/character', { dispatch }) => {
    try {
      dispatch(spinnerDisplayOn());
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      dispatch(spinnerDisplayOff());
      return jsonData;
    } catch (error) {
      console.log(error);
    }
  });

export const CharactersSlice = createSlice({
    name: 'characters',
    initialState: {
        data: [],
        originalData: [],
        nextPageUrl: '',
    },
    reducers: {
        characterFilter: (state, action) => {
            const filterText = action.payload.toLowerCase();
            state.data = state.originalData.filter(character => {
              return character.name.toLowerCase().includes(filterText);
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.data = [...state.data, ...action.payload.results]
                state.originalData = [...state.originalData, ...action.payload.results]
                state.nextPageUrl = action.payload.info.next
                console.log('fulfilled status');

            })
            .addCase(fetchCharacters.pending, (state, action) => {
                console.log('pending status');
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                console.log('rejected status');
            });
    },
});

  export const { characterFilter, addCharacterId } = CharactersSlice.actions;

  export default CharactersSlice.reducer;