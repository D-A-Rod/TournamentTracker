const Sequelize = require("sequelize");
const db = require("../db");

const Teams = db.define("teams", {
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
  playerfirstname: {
    type: Sequelize.STRING,
  },
  playerlastname: {
    type: Sequelize.STRING,
  },
});

module.exports = Teams;
