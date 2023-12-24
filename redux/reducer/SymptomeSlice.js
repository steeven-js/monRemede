// SymptomeSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const SymptomeSlice = createSlice({
  name: 'symptomes',
  initialState: {
    fetchedData: null,
  },
  reducers: {
    setFetchedData: (state, action) => {
      state.fetchedData = action.payload;
    },
  },
});

export const { setFetchedData } = SymptomeSlice.actions;

export const selectFetchedData = (state) => state.symptomes.fetchedData;

export default SymptomeSlice.reducer;