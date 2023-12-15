import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk('fetchCategories', async () => {
  const res = await fetch('https://apimonremede.jsprod.fr/api/categories');
  const final = await res.json();
  return final;
});
