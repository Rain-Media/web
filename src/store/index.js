import {configureStore} from '@reduxjs/toolkit';
import hamburgerReducer from './features/hamburger-menu/hamburgerSlice';

export const store = configureStore({
  reducer: {
    hamburger: hamburgerReducer
  }
});
