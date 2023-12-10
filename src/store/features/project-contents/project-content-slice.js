import { createSlice } from "@reduxjs/toolkit";

export const projectContentSlice = createSlice({
  name: 'project-content',
  initialState: {
    currentTab: 'memuzin',
    selectedTab: 'topic',
    currentlyData: null
  },
  reducers: {
    setCurrentlyTab: (state, action) => {
      state.currentTab = action.payload;
    },
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
    setCurrentlyData: ( state, action ) => {
      state.currentlyData = action.payload
    }
  }
});

export const { setCurrentlyTab, setSelectedTab, setCurrentlyData } = projectContentSlice.actions;
export default projectContentSlice.reducer;
