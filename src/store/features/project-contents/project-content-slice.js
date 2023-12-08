import { createSlice } from "@reduxjs/toolkit";

export const projectContentSlice = createSlice({
  name: 'project-content',
  initialState: {
    currentTab: ''
  },
  reducers: {
    setCurrentlyTab: (state, action) => {
      state.currentTab = action.payload;
    }
  }
});

export const { setCurrentlyTab } = projectContentSlice.actions;
export default projectContentSlice.reducer;
