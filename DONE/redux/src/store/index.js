// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import counterReducer from "./counter";

export const INCREMENT = "increment";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
