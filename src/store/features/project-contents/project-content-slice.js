import { createSlice } from "@reduxjs/toolkit";

export const projectContentSlice = createSlice({
  name: 'project-content',
  initialState: {
    currentProject: 'memuzin',
    selectedTab: 'topic',
    currentlyData: null
  },
  reducers: {
    setCurrentlyProject: (state, action) => {
      state.currentProject = action.payload;
    },
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
    setCurrentlyData: ( state, action ) => {
      state.currentlyData = action.payload
    }
  }
});

export const { setCurrentlyProject, setSelectedTab, setCurrentlyData } = projectContentSlice.actions;
export default projectContentSlice.reducer;
