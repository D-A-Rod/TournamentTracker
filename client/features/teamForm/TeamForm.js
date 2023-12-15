import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAddTeamAsync } from "./teamFormSlice";

const TeamForm = () => {
  const dispatch = useDispatch();

  const [teamname, setTeamName] = useState("");
  const [agegroup, setAgeGroup] = useState("");
  const [coach, setCoach] = useState("");
  const [players, setPlayers] = useState([]);
  const [newPlayerFirstName, setNewPlayerFirstName] = useState("");
  const [newPlayerLastName, setNewPlayerLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Team Name:", teamname);
    console.log("Age Bracket:", agegroup);
    console.log("Coach:", coach);
    console.log("Players:", players);

    if (newPlayerFirstName.trim() !== "" && newPlayerLastName.trim() !== "") {
      setPlayers((prevPlayers) => [
        ...prevPlayers,
        { firstName: newPlayerFirstName, lastName: newPlayerLastName },
      ]);
    }

    dispatch(
      fetchAddTeamAsync({
        teamname: teamname,
        agegroup: agegroup,
        coach: coach,
        playerfirstname: newPlayerFirstName,
        playerlastname: newPlayerLastName,
      })
    );

    // Reset form fields
    setTeamName("");
    setAgeGroup("");
    setCoach("");
    setNewPlayerFirstName("");
    setNewPlayerLastName("");
  };

  const addPlayer = () => {
    if (newPlayerFirstName.trim() !== "" && newPlayerLastName.trim() !== "") {
      setPlayers((prevPlayers) => [
        ...prevPlayers,
        { firstName: newPlayerFirstName, lastName: newPlayerLastName },
      ]);
      setNewPlayerFirstName("");
      setNewPlayerLastName("");
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Team Name:
            <input
              type="text"
              value={teamname}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </label>

          <label>
            Age Bracket:
            <input
              type="text"
              value={agegroup}
              onChange={(e) => setAgeGroup(e.target.value)}
              required
            />
          </label>

          <label>
            Coach:
            <input
              type="text"
              value={coach}
              onChange={(e) => setCoach(e.target.value)}
              required
            />
          </label>

          <div>
            <label>
              Player First Name:
              <input
                type="text"
                value={newPlayerFirstName}
                onChange={(e) => setNewPlayerFirstName(e.target.value)}
                required
              />
            </label>

            <label>
              Player Last Name:
              <input
                type="text"
                value={newPlayerLastName}
                onChange={(e) => setNewPlayerLastName(e.target.value)}
                required
              />
            </label>

            <button type="button" onClick={addPlayer}>
              Add Player
            </button>
          </div>

          <label>
            Players:
            <ul>
              {players.map((player, index) => (
                <li key={index}>
                  {player.firstName} {player.lastName}
                </li>
              ))}
            </ul>
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TeamForm;
