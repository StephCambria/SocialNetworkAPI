const {
  getRandomName,
} = require("../../../28-Stu_Mini-Project/Develop/utils/data");
const connection = require("../config/connection");
const { User, Thought } = require("../models");
// const {} = require("./data"); // import data functions here
// const {} = require("./dates"); // import date functionality here

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Empty array to hold users
  const users = [];

  // Get thoughts
  // const thoughts = getThought();

  const fullName = getName();
  const first = fullName.split(" ")[0];
  const last = fullName.split(" ")[1];

  users.push({
    first,
    last,
    email,
    thoughts,
  });

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
