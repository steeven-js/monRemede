// index.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSymptomes = createAsyncThunk('fetchSymptomes', async () => {
    try {
        const res = await fetch('https://apimonremede.jsprod.fr/api/symptomes');
        const final = await res.json();
        return final;
    } catch (error) {
        console.error('Error fetching symptomes:', error);
        throw error;
    }
});

export const fetchSymptome = createAsyncThunk('fetchSymptome', async (symptomesId) => {
    try {
        const res = await fetch(`https://apimonremede.jsprod.fr/api/symptomes/${symptomesId}`);
        const final = await res.json();
        return final;
    } catch (error) {
        console.error('Error fetching symptome:', error);
        throw error;
    }
});

export const fetchPlants = createAsyncThunk('fetchPlants', async () => {
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
