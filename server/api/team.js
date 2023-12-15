const router = require("express").Router();
const { models } = require("../db");

const { Team, Player } = models;

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const allTeams = await Team.findAll({
      attributes: ["id", "teamname", "agegroup", "coach", "wins", "losses"],
      include: {
        model: Player,
        attributes: ["id", "playerfirstname", "playerlastname"],
      },
    });
    res.json(allTeams);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    // Create a new team
    const newTeam = await Team.create({
      teamname: req.body.teamname,
      agegroup: req.body.agegroup,
      coach: req.body.coach,
    });

    // Loop through the players array in the request body and associate them with the new team
    if (req.body.players && req.body.players.length > 0) {
      const players = req.body.players.map((player) => ({
        playerfirstname: player.playerfirstname,
        playerlastname: player.playerlastname,
        teamId: newTeam.id,
      }));

      await Player.bulkCreate(players);
    }

    res.status(201).json(newTeam);
  } catch (error) {
    next(error);
  }
});

router.put("/:teamId/updateStats", async (req, res, next) => {
  try {
    const { wins, losses } = req.body;
    const team = await Team.findByPk(req.params.teamId);

    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    team.wins = wins;
    team.losses = losses;

    await team.save();

    return res.status(200).json({ message: "Team stats updated successfully" });
  } catch (err) {
    next(err);
  }
});
