const router = require("express").Router();
const {
  models: { Teams },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const teams = await Teams.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: [
        "id",
        "teamname",
        "agegroup",
        "coach",
        "playerfirstname",
        "playerlastname",
      ],
    });
    res.json(teams);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const new_team = await Teams.create(req.body);
    res.status(200).send(new_team);
  } catch (error) {
    next(error);
  }
});
