// PlantSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchPlants } from '../fetchApi/fetchPlants';
import { fetchPlant } from '../fetchApi/fetchPlants';

const PlantSlice = createSlice({
    name: 'plants',
    initialState: {
        data: null,
        isLoader: false,
        isError: false,
        selectedPlant: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPlants.pending, (state) => {
            state.isLoader = true;
        });
        builder.addCase(fetchPlants.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
        });
        builder.addCase(fetchPlants.rejected, (state) => {
            state.isLoader = false;
            state.isError = true;
        });
        builder.addCase(fetchPlant.pending, (state) => {
            state.isLoader = true;
        });
        builder.addCase(fetchPlant.fulfilled, (state, action) => {
            state.isLoader = false;
            state.selectedPlant = action.payload;
        });
        builder.addCase(fetchPlant.rejected, (state) => {
            state.isLoader = false;
            state.isError = true;
        });
    },
});

export default PlantSlice.reducer;
