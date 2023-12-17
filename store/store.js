import {configureStore} from '@reduxjs/toolkit';
import CategoryReducer from './reducer/CategorieSlice';
import PlantReducer from './reducer/PlantSlice';

export const store = configureStore({
  reducer: {
    categories: CategoryReducer,
    plants: PlantReducer,
  },
});
