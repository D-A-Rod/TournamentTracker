import React, { useState } from "react";

const TeamForm = () => {
  const [teamName, setTeamName] = useState("");
  const [ageBracket, setAgeBracket] = useState("");
  const [coach, setCoach] = useState("");
  const [players, setPlayers] = useState([]);
  const [newPlayerFirstName, setNewPlayerFirstName] = useState("");
  const [newPlayerLastName, setNewPlayerLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Team Name:", teamName);
    console.log("Age Bracket:", ageBracket);
    console.log("Coach:", coach);
    console.log("Players:", players);

    if (newPlayerFirstName.trim() !== "" && newPlayerLastName.trim() !== "") {
      setPlayers((prevPlayers) => [
        ...prevPlayers,
        { firstName: newPlayerFirstName, lastName: newPlayerLastName },
      ]);
    }

    // Reset form fields
    setTeamName("");
    setAgeBracket("");
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
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </label>

          <label>
            Age Bracket:
            <input
              type="text"
              value={ageBracket}
              onChange={(e) => setAgeBracket(e.target.value)}
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
