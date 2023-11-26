import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiUrl = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = createAsyncThunk('comments/fetchCharacters', async () => {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();

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
                state.data = action.payload.results;
                state.originalData = action.payload.results;
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