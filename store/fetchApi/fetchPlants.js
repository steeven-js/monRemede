// fetchPlants.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPlants = createAsyncThunk('FetchPlants', async () => {
    try {
        const res = await fetch('https://apimonremede.jsprod.fr/api/plants');
        if (!res.ok) {
            throw new Error('Failed to fetch plants');
        }
        const final = await res.json();
        return final;
    } catch (error) {
        console.error('Error fetching plants:', error);
        throw error;
    }
});
