// PlantSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPlantes = createAsyncThunk('fetchPlantes', async () => {
    const data = await fetch('https://apimonremede.jsprod.fr/api/plants');
    return data.json();
});

export const PlantSlice = createSlice({
    name: 'plantes',
    initialState: {
        isLoading: false,
        data: null,
        error: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlantes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPlantes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchPlantes.rejected, (state, action) => {
                state.status = true;
            });
    },
});

export default PlantSlice.reducer;
