import {configureStore} from '@reduxjs/toolkit';
import hamburgerReducer from './features/hamburgerSlice';

export const store = configureStore({
  reducer: {
    hamburger: hamburgerReducer
  }
});
