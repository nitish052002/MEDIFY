import { configureStore } from "@reduxjs/toolkit";
import { RootReducer as reducer } from "./reducers";
 

export const store = configureStore({
    reducer
})
