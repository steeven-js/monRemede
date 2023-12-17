// FetchPlants.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPlant = createAsyncThunk('fetchPlant', async (plantId) => {
    try {
        const res = await fetch(`https://apimonremede.jsprod.fr/api/plants/${plantId}`);
        const final = await res.json();
        return final;
    } catch (error) {
        console.error('Error fetching plant:', error);
        throw error;
    }
});
