// PlantSlice.js
import { FetchPlants } from '../fetchApi/FetchPlants'; 

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const PlantSlice = createSlice({
    name: 'plants',
    initialState: {
        data: null,
        isLoader: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(FetchPlants.pending, (state) => {
            state.isLoader = true;
        });
        builder.addCase(FetchPlants.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
        });
        builder.addCase(FetchPlants.rejected, (state) => {
            state.isLoader = false;
            state.isError = true;
        });
    },
});

export default PlantSlice.reducer;
