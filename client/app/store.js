import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import allTeamsSlice from "../features/bracket/bracketSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allTeams: allTeamsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
