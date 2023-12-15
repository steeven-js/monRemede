import {fetchCategories} from '../fetchApi/FetchCategories';

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

const Productslice = createSlice({
  name: 'categories',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },
  extraReducers: builder => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default Productslice.reducer;
