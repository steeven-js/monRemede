// store.js

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
});

export default store;
