import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTeams } from "./bracketSlice";
// import { Link } from "react-router-dom";

const Bracket = () => {
  const dispatch = useDispatch();

  const allTeams = useSelector((state) => state.allTeams.teamsList);

  useEffect(() => {
    dispatch(fetchAllTeams());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>This weekend's teams. Good luck to all!</h1>
      </div>
      <div>
        {allTeams && allTeams.length > 0 ? (
          allTeams.map((team) => (
            <div key={team.id} className="team-card">
              <h2>{team.teamname}</h2>
              <p>{team.coach}</p>
            </div>
          ))
        ) : (
          <p>Loading teams...</p>
        )}
      </div>
    </div>
  );
};

export default Bracket;
