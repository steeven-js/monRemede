// fetchPlants.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategory = createAsyncThunk('fetchCategory', async (categoryId) => {
    try {
        const res = await fetch(`https://apimonremede.jsprod.fr/api/categories/${categoryId}`);
        const final = await res.json();
        // console.log('category response:', final); // Log the response
        return final;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
});

