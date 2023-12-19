// store.js

import { configureStore } from '@reduxjs/toolkit';
import SymptomeReducer from './reducer/SymptomeSlice';
import PlantReducer from './reducer/PlantSlice';
import FavoritesReducer from './reducer/FavoritesSlice';
import userReducer from './reducer/userReducer';

const store = configureStore({
    reducer: {
        symptomes: SymptomeReducer,
        plants: PlantReducer,
        favorites: FavoritesReducer,
        user: userReducer,
    },
});

export default store;
