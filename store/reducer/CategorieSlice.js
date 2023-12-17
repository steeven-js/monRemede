// CategorySlice.js
import { fetchCategories } from '../fetchApi/FetchCategories';
import { fetchPlants } from '../fetchApi/fetchPlants';

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

const CategorySlice = createSlice({
  name: 'categories',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
    selectedCategory: null,
    categoryPlants: [], // Set an empty array as the default value
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
    builder.addCase(fetchPlants.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(fetchPlants.fulfilled, (state, action) => {
      state.isLoader = false;
      state.categoryPlants = action.payload;
    });
    builder.addCase(fetchPlants.rejected, (state) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default CategorySlice.reducer;
