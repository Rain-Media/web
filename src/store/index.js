import {configureStore} from '@reduxjs/toolkit';
import hamburgerReducer from './features/hamburger-menu/hamburgerSlice';
import projectContentReducer from "./features/project-contents/project-content-slice";

export const store = configureStore({
  reducer: {
    hamburger: hamburgerReducer,
    projectContent: projectContentReducer
  }
});
