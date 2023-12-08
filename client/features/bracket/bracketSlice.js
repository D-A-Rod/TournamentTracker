import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllTeams = createAsyncThunk("allTeams", async () => {
  try {
    const { data } = await axios.get("/api/team");
    return data;
  } catch (error) {
    console.log(error);
  }
});

const allTeamsSlice = createSlice({
  name: "allTeams",
  initialState: {
    teamsList: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTeams.fulfilled, (state, action) => {
      state.teamsList = action.payload;
    });
  },
});
