import { combineReducers } from "redux";
import  demoSlice   from "./Features/demoSlice";

export const RootReducer = combineReducers({
    todos : demoSlice
    // products: productReducer,
    // alerts: alertReducer,
  });

  export type RootState = ReturnType<typeof RootReducer>;