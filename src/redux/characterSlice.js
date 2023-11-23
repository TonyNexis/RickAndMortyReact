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
    initialState: {
        data: [],
        originalData: [], // Добавляем свойство для сохранения оригинальных данных
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
                state.data = action.payload.results; // Используем свойство data для хранения данных
                state.originalData = action.payload.results; // Сохраняем оригинальные данные
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

  export const { characterFilter } = CharactersSlice.actions;

  export default CharactersSlice.reducer