// index.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk('fetchCategories', async () => {
    try {
        const res = await fetch('https://apimonremede.jsprod.fr/api/categories');
        const final = await res.json();
        return final;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
});

export const fetchCategory = createAsyncThunk('fetchCategory', async (categoryId) => {
    try {
        const res = await fetch(`https://apimonremede.jsprod.fr/api/categories/${categoryId}`);
        const final = await res.json();
        return final;
    } catch (error) {
        console.error('Error fetching category:', error);
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
