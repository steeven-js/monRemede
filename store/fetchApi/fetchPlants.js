import { createAsyncThunk } from '@reduxjs/toolkit';

export const FetchPlants = createAsyncThunk('FetchPlants', async () => {
    const res = await fetch('https://apimonremede.jsprod.fr/api/plants');
    const final = await res.json();
    return final;
});
