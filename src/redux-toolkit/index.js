import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkit-slice";
import conversionSlice from "./conversion-slice";

const rootReducer = combineReducers({
  toolkit: toolkitSlice,
  conversion: conversionSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
