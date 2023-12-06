const Sequelize = require("sequelize");
const db = require("../db");

const Team = db.define("team", {
  teamname: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  agegroup: {
    type: Sequelize.INTEGER,
  },
  coach: {
    type: Sequelize.STRING,
  },
  wins: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  losses: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Team;
