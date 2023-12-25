// symptomeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSymptomes = createAsyncThunk('fetchSymptomes', async () => {
  const data = await fetch('https://apimonremede.jsprod.fr/api/symptomes');
  return data.json();
});

const symptomsSlice = createSlice({
  name: 'symptomes',
  initialState: {
    isLoading: false,
    data: null,
    error: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSymptomes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSymptomes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchSymptomes.rejected, (state, action) => {
        state.status = true;
      });
  },
});

export default symptomsSlice.reducer;
