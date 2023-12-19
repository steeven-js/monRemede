// reducer/FavoritesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addToFavorites: (state, action) => {
            // Check if the plant is not already in favorites
            if (!state.some((plant) => plant.plantId === action.payload.plantId)) {
                state.push(action.payload);
            }
        },
    },
});

export const { addToFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
