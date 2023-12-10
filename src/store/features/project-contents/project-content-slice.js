import { createSlice } from "@reduxjs/toolkit";

export const projectContentSlice = createSlice({
  name: 'project-content',
  initialState: {
    currentTab: '',
    selectedTab: 'topic'
  },
  reducers: {
    setCurrentlyTab: (state, action) => {
      state.currentTab = action.payload;
    },
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    }
  }
});

export const { setCurrentlyTab, setSelectedTab } = projectContentSlice.actions;
export default projectContentSlice.reducer;
