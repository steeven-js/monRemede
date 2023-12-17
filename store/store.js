// store.js
import { configureStore } from '@reduxjs/toolkit';
import CategoryReducer from './reducer/CategorieSlice';
import PlantReducer from './reducer/PlantSlice';

const store = configureStore({
  reducer: {
    categories: CategoryReducer,
    plants: PlantReducer,
  },
});

export default store;
