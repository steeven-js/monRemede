// store.js

import { configureStore } from '@reduxjs/toolkit';
import SymptomeReducer from './reducer/SymptomeSlice';
import PlantReducer from './reducer/PlantSlice';
import FavoritesReducer from './reducer/FavoritesSlice';

const store = configureStore({
    reducer: {
        symptomes: SymptomeReducer,
        plants: PlantReducer,
        favorites: FavoritesReducer,
    },
});

export default store;
