// store.js

import { configureStore } from '@reduxjs/toolkit';
import SymptomeReducer from './reducer/symptomeSlice';
import PlantReducer from './reducer/plantSlice';
import userReducer from './reducer/userReducer';

const store = configureStore({
    reducer: {
        symptomes: SymptomeReducer,
        plants: PlantReducer,
        user: userReducer,
    },
});

export default store;
