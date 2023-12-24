// PlantSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const PlantSlice = createSlice({
    name: 'plants',
    initialState: {
        fetchedData: null,
    },
    reducers: {
        setFetchedData: (state, action) => {
            state.fetchedData = action.payload;
        },
    },
});

export const { setFetchedData } = PlantSlice.actions;

export const selectFetchedData = (state) => state.plants.fetchedData;

export default PlantSlice.reducer;