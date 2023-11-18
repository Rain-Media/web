import {createSlice } from "@reduxjs/toolkit";

export const hamburgerSlice = createSlice({
  name: 'hamburger',
  initialState: {
    open: false
  },
  reducers: {
    setOpen: (state) => {
      state.open = true;
    },
    setClose: (state) => {
      state.open = false;
    }
  }
});

export const { setOpen, setClose } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;
