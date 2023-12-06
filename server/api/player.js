const router = require("express").Router();
const { models } = require("../db"); 

const { Player, Team } = models;

module.exports = router;


router.get("/", async (req, res, next) => {
  try {
    const players = await Player.findAll({
      attributes: ["id", "playerfirstname", "playerlastname"],
      include: {
        model: Team,
        attributes: ["id", "teamname", "agegroup", "coach"],
      },
    });
    res.json(players);
  } catch (err) {
    next(err);
  }
});


router.post("/", async (req, res, next) => {
  try {
    const newPlayer = await Player.create({
      playerfirstname: req.body.playerfirstname,
      playerlastname: req.body.playerlastname,
      teamId: req.body.teamId,
    });

    res.status(201).json(newPlayer);
  } catch (error) {
    next(error);
  }
});
