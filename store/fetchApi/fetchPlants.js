// fetchPlants.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPlants = createAsyncThunk('fetchPlants', async (categoryId) => {
    try {
        const res = await fetch(`https://apimonremede.jsprod.fr/api/categories/${categoryId}`);
        const final = await res.json();
        // console.log('Plants response:', final); // Log the response
        return final;
    } catch (error) {
        console.error('Error fetching plants:', error);
        throw error;
    }
});

