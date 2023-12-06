"use strict";

const {
  db,
  models: { User, Team, Player },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  const team = await Promise.all([
    Team.create({
      teamname: "longhorns",
      agegroup: "15",
      coach: "dan rodriguez",
      wins: 4,
      losses: 1,
    }),
    Team.create({
      teamname: "rattlers",
      agegroup: "15",
      coach: "vick rodriguez",
      wins: 3,
      losses: 2,
    }),
    Team.create({
      teamname: "Jacks",
      agegroup: "15",
      coach: "noel rodriguez",
      wins: 2,
      losses: 3,
    }),
    Team.create({
      teamname: "north marion",
      agegroup: "15",
      coach: "randy brock",
      wins: 3,
      losses: 2,
    }),
    Team.create({
      teamname: "sidewinders",
      agegroup: "13",
      coach: "randy johnson",
      wins: 5,
      losses: 0,
    }),
    Team.create({
      teamname: "trash pandas",
      agegroup: "13",
      coach: "jimmy deen",
      wins: 3,
      losses: 2,
    }),
    Team.create({
      teamname: "barons",
      agegroup: "13",
      coach: "micheal jordan",
      wins: 3,
      losses: 2,
    }),
    Team.create({
      teamname: "red sox",
      agegroup: "13",
      coach: "big papi",
      wins: 2,
      losses: 3,
    }),
  ]);

  const player = await Promise.all([
    Player.create({
      playerfirstname: "crew",
      playerlastname: "rodriguez",
      teamId: team[0].id,
    }),
    Player.create({
      playerfirstname: "john",
      playerlastname: "smith",
      teamId: team[1].id,
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${team.length} Teams`);
  console.log(`seeded ${player.length} players`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    team: {
      Longhorns: team[0],
      rattlers: team[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
