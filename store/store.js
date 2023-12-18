// store.js

import { configureStore } from '@reduxjs/toolkit';
import CategoryReducer from './reducer/CategorieSlice';
import PlantReducer from './reducer/PlantSlice';
import FavoritesReducer from './reducer/FavoritesSlice';

const store = configureStore({
    reducer: {
        categories: CategoryReducer,
        plants: PlantReducer,
        favorites: FavoritesReducer,
    },
});

export default store;
