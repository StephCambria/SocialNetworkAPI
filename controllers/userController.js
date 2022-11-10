const { User, Thought } = require("../models");

module.exports = {
  // =======================================
  // =======================================
  // =======================================
  // Get all users
  getUsers(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // =======================================
  // =======================================
  // =======================================
  // Get a single user
  getSingleUser(req, res) {
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
  // =======================================
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // =======================================
  // =======================================
  // =======================================
  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
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
  // =======================================
  // Delete thoughts when deleting a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId }).then((user) =>
      user.thoughts
        .forEach((thought) => {
          thought.findOneAndDelete({ _id: user }); // I'm assuming we specify the userId for this
        })
        .then((user) => {
          !user
            ? res.status(404).json({
                message: "No user found with that ID",
              })
            : res.json({ message: "User and thoughts deleted" });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        })
    );
  },
  // =======================================
  // =======================================
  // =======================================
  // Add a friend to a user
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      { new: true }
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
  // =======================================
  // Remove friend
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
