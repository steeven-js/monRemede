// store.js

import { configureStore } from '@reduxjs/toolkit';
import symptomeReducer from './reducer/symptomeSlice'

const store = configureStore({
    reducer: {
        symptomes: symptomeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
});

export default store;
