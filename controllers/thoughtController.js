const { Thought, User } = require("../models");

module.exports = {
  // =======================================
  // =======================================
  // Get all thoughts
  // =======================================
  // =======================================
  getThoughts(req, res) {
    // find({}) will return all thoughts in the database
    Thought.find({})
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  // =======================================
  // =======================================
  // Get one thought
  // =======================================
  // =======================================
  getSingleThought(req, res) {
    // Find the thought ID and return all data associated with it
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .lean()
      .then(async (thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json({
              thought,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // =======================================
  // =======================================
  // Create a thought
  // =======================================
  // =======================================
  createThought(req, res) {
    // No ID needed, just add a thought to the database
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // =======================================
  // =======================================
  // Delete a thought
  // =======================================
  // =======================================
  deleteThought(req, res) {
    // Find the thought ID
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : thought.deleteOne({ _id: { $in: thought.user } })
      )
      .then(() => res.json({ message: "Thought deleted" }))
      .catch((err) => res.status(500).json(err));
  },
  // =======================================
  // =======================================
  // Update a thought
  // =======================================
  // =======================================
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      // Find the thought ID
      { _id: req.params.thoughtId },
      // Update the thought directly
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // =======================================
  // =======================================
  // Add a reaction
  // =======================================
  // =======================================
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      // Look for the thought ID
      { _id: req.params.thoughtId },
      // Add the reaction to that thought
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // =======================================
  // =======================================
  // Delete a reaction
  // =======================================
  // =======================================
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      // Look for the thought ID
      { _id: req.params.thoughtId },
      // Remove the reaction based on the selected reaction ID
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : reactions.deleteOne({ _id: { $in: req.params.reactionId } })
      )
      .then(() => res.json({ message: "Reaction deleted!" }))
      .catch((err) => res.status(500).json(err)); // I keep getting this error, but the reaction deletes correctly
  },
};
