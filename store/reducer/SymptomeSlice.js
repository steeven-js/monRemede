// SymptomeSlice.js
import { fetchSymptomes, fetchSymptome } from '../fetchApi';

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

const SymptomeSlice = createSlice({
  name: 'symptomes',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
    selectedSymptome: null,
    symptomePlants: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSymptomes.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(fetchSymptomes.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchSymptomes.rejected, (state) => {
      state.isLoader = false;
      state.isError = true;
    });
    builder.addCase(fetchSymptome.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(fetchSymptome.fulfilled, (state, action) => {
      state.isLoader = false;
      state.symptomePlants = action.payload;
    });
    builder.addCase(fetchSymptome.rejected, (state) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default SymptomeSlice.reducer;
