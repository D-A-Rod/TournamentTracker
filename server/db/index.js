// //this is the access point for all things database related!

// const db = require('./db')

// const User = require('./models/User')
// const Team = require('./models/Team')
// const Player = require('./models/Player')

// //associations could go here!

// Team.hasMany(Player);
// Player.belongsTo(Team);

// module.exports = {
//   db,
//   models: {
//     User,
//     Team,
//     Player
//   },
// }
// index.js in the db folder
///////////////////////////////////

const db = require("./db");
const User = require("./models/User");
const Team = require("./models/Team");
const Player = require("./models/Player");

// Associations
Team.hasMany(Player);
Player.belongsTo(Team);

// Your logic to check for an existing team and associate a player
const checkTeamAndAssociatePlayer = async (
  teamName,
  ageBracket,
  coach,
  newPlayerFirstName,
  newPlayerLastName
) => {
  try {
    // Check if the team exists
    const existingTeam = await Team.findOne({
      where: { teamname: teamName, agegroup: ageBracket },
    });

    if (existingTeam) {
      // Team exists, associate the player with the existing team
      await Player.create({
        playerfirstname: newPlayerFirstName,
        playerlastname: newPlayerLastName,
        teamId: existingTeam.id,
      });
    } else {
      // Team doesn't exist, create a new team and associate the player
      const newTeam = await Team.create({
        teamname: teamName,
        agegroup: ageBracket,
        coach: coach,
      });

      // Associating the player with the newly created team
      await Player.create({
        playerfirstname: newPlayerFirstName,
        playerlastname: newPlayerLastName,
        teamId: newTeam.id,
      });
    }

    console.log("Team and player association successful!");
  } catch (error) {
    console.error("Error:", error);
  }
};

module.exports = {
  db,
  models: {
    User,
    Team,
    Player,
  },
  checkTeamAndAssociatePlayer,
};
