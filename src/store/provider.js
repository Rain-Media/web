"use client"

import {store} from "./index";
import { Provider } from "react-redux";

export default ({children}) => {
  
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
}