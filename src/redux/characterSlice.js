import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiUrl = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = createAsyncThunk('comments/fetchCharacters', async () => {
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const jsonData = await response.json();

      
      console.log(jsonData.results)

    //   dispatch(spinnerDisplayOff());
      return jsonData;
    } catch (error) {
      console.log(error);
    }
  });

  export const CharactersSlice = createSlice({
    name: 'characters',
    initialState: [],
    reducers: {
      commentDelete: {
        reducer: (state, action) => {
          return state.filter(comment => comment.id !== action.payload);
        }
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCharacters.fulfilled, (state, action) => {
          state.push(...action.payload.results);
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

  export default CharactersSlice.reducer