// PlantSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { FetchPlants } from '../fetchApi/FetchPlants';
import { FetchPlant } from '../fetchApi/FetchPlant';

const PlantSlice = createSlice({
    name: 'plants',
    initialState: {
        data: null,
        isLoader: false,
        isError: false,
        selectedPlant: null,
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
        builder.addCase(FetchPlant.pending, (state) => {
            state.isLoader = true;
        });
        builder.addCase(FetchPlant.fulfilled, (state, action) => {
            state.isLoader = false;
            state.selectedPlant = action.payload;
        });
        builder.addCase(FetchPlant.rejected, (state) => {
            state.isLoader = false;
            state.isError = true;
        });
    },
});

export default PlantSlice.reducer;
