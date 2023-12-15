import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAddTeamAsync = createAsyncThunk(
  "team/fetchAddTeamAsync",
  async ({ teamname, agegroup, coach, playerfirstname, playerlastname }) => {
    try {
      const { data: newTeam } = await axios.post("/api/team", {
        teamname: teamname,
        coach: coach,
        agegroup: agegroup,
        players: [{ playerfirstname, playerlastname }],
      });
      const { data: newPlayer } = await axios.post("/api/player", {
        playerfirstname,
        playerlastname,
        teamId: newTeam.id,
      });
      return { newTeam, newPlayer };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const teamFormSlice = createSlice({
  name: "team",
  initialState: {
    newTeamList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAddTeamAsync.fulfilled, (state, action) => {
      state.newTeamList.push({
        newTeam: action.payload.newTeam,
        newPlayer: action.payload.newPlayer,
      });
      console.log(action.payload.newTeam);
      console.log(action.payload.newPlayer);
    });
  },
});

export default teamFormSlice.reducer;
