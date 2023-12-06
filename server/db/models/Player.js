const Sequelize = require("sequelize");
const db = require("../db");

const Player = db.define("player", {
  playerfirstname: {
    type: Sequelize.STRING,
  },
  playerlastname: {
    type: Sequelize.STRING,
  },
});

module.exports = Player;
