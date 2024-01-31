import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import allTeamsSlice from "../features/teams/TeamSlice";
import teamFormSlice from "../features/teamForm/teamFormSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allTeams: allTeamsSlice,
    team: teamFormSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
