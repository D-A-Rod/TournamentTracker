import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = [];

export const fetchAllTeams = createAsyncThunk(
  "allTeams/fetchAllTeams",
  async () => {
    try {
      const { data } = await axios.get("/api/team");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const allTeamsSlice = createSlice({
  name: "allTeams",
  initialState: {
    teamsList: [],
  },
  //   initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTeams.fulfilled, (state, action) => {
      state.teamsList = action.payload;
    });
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchAllTeams.fulfilled, (state, action) => {
  //       return action.payload;
  //     });
  //   },
});

export const selectAllTeams = (state) => {
  console.log("This is state from allTeamsSlice"), state;
  return state.allTeams;
};

export default allTeamsSlice.reducer;
