// CategorySlice.js
import { fetchCategories, fetchCategory } from '../fetchApi';

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

const CategorySlice = createSlice({
  name: 'categories',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
    selectedCategory: null,
    categoryPlants: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.isLoader = false;
      state.isError = true;
    });
    builder.addCase(fetchCategory.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.isLoader = false;
      state.categoryPlants = action.payload;
    });
    builder.addCase(fetchCategory.rejected, (state) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default CategorySlice.reducer;
