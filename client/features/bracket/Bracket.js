import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTeams } from "./bracketSlice";

const Bracket = () => {
  const dispatch = useDispatch();
  const [age13Teams, setAge13Teams] = useState([]);
  const [age15Teams, setAge15Teams] = useState([]);

  const allTeams = useSelector((state) => state.allTeams.teamsList);

  useEffect(() => {
    dispatch(fetchAllTeams());
  }, [dispatch]);

  useEffect(() => {
    const age13 = allTeams.filter((team) => team.agegroup === 13);
    const age15 = allTeams.filter((team) => team.agegroup === 15);

    setAge13Teams(age13);
    setAge15Teams(age15);
  }, [allTeams]);

  return (
    <div>
      <div>
        <h1>This weekend's teams. Good luck to all!</h1>
      </div>

      <div>
        <h2>13U Age Bracket</h2>
        <span>Pool play</span>
        {age13Teams.length > 0 ? (
          age13Teams.map((team) => (
            <div key={team.id} className="team-card">
              <h3>
                {team.teamname.charAt(0).toUpperCase() + team.teamname.slice(1)}
              </h3>
              <span>
                Record: {team.wins}-{team.losses}
              </span>
              <p>Coach: {team.coach}</p>
            </div>
          ))
        ) : (
          <p>No teams for the 13 age bracket.</p>
        )}
      </div>

      <div>
        <h2>15U Age Bracket</h2>
        {age15Teams.length > 0 ? (
          age15Teams.map((team) => (
            <div key={team.id} className="team-card">
              <h3>
                {team.teamname.charAt(0).toUpperCase() + team.teamname.slice(1)}
              </h3>
              <p>{team.coach}</p>
            </div>
          ))
        ) : (
          <p>No teams for the 15 age bracket.</p>
        )}
      </div>
    </div>
  );
};

export default Bracket;
