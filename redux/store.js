// store.js

import { configureStore } from '@reduxjs/toolkit';
import symptomeReducer from './reducer/symptomeSlice';
import plantReducer from './reducer/plantSlice';
import userReducer from './reducer/userReducer';

const store = configureStore({
    reducer: {
        symptomes: symptomeReducer,
        plants: plantReducer,
        user: userReducer,
    },
});

export default store;
