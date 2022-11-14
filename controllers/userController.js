const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  // =======================================
  // =======================================
  // Get all users
  // =======================================
  // =======================================
  getUsers(req, res) {
    // find({}) will return all users in the database
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // =======================================
  // =======================================
  // Get one user
  // =======================================
  // =======================================
  getSingleUser(req, res) {
    // Find the user ID and return all data associated with it
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .lean()
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // =======================================
  // =======================================
  // Create a user
  // =======================================
  // =======================================
  createUser(req, res) {
    // No ID needed, just add a user to the database
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // =======================================
  // =======================================
  // Update a user
  // =======================================
  // =======================================
  updateUser(req, res) {
    // Find the user ID
    User.findOneAndUpdate(
      { _id: req.params.userId },
      // Update the user directly
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // =======================================
  // =======================================
  // Delete a user
  // =======================================
  // =======================================
  deleteUser(req, res) {
    // Find the user ID
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with that ID" })
          : // Specify the ID for deletion
            User.deleteOne({ _id: { $in: user.userId } })
      )
      .then(() => res.json({ message: "User deleted" }))
      .catch((err) => res.status(500).json(err));
  },
  // =======================================
  // =======================================
  // Add a friend to a user
  // =======================================
  // =======================================
  addFriend(req, res) {
    // Look for the user ID
    User.findOneAndUpdate(
      { _id: req.params.userId },
      // Add the friend to that user
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // =======================================
  // =======================================
  // Remove a friend from a user
  // =======================================
  // =======================================
  removeFriend(req, res) {
    // Look for the user ID
    User.findOneAndUpdate(
      { _id: req.params.userId },
      // Remove the friend based on the selected ID
      // The friends array returns each friend's user ID instead of an entirely new ID
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) => {
        if (!user) {
          return res
            .status(404)
            .json({ message: "No user found with that ID" });
        }
        res.json(user);
      })
      .catch((err) => res.status(500).json(err));
  },
};
