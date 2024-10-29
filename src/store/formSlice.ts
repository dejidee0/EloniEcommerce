// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    country: '',
    email: '',
    name: '',
    submitted: false,
  },
  reducers: {
    updateCountry: (state, action) => {
      state.country = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    submitForm: (state) => {
      state.submitted = true;
    },
  },
});

export const { updateCountry, updateEmail, updateName, submitForm } = formSlice.actions;
export default formSlice.reducer;
