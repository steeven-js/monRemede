// store.js

import { configureStore } from '@reduxjs/toolkit';
import symptomeReducer from './reducer/symptomeSlice';
import plantReducer from './reducer/plantSlice';

const store = configureStore({
    reducer: {
        symptomes: symptomeReducer,
        plants: plantReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
});

export default store;
