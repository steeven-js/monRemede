import {configureStore} from '@reduxjs/toolkit';
import CategoryReducer from './reducer/CategorieSlice';
export const store = configureStore({
  reducer: {
    categories: CategoryReducer,
  },
});
