import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const initialState = {};

export default configureStore({
  reducer: rootReducer,
  initialState,
});
