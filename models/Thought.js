const { Schema, model } = require("mongoose");
//const assignmentSchema = require('./Assignment');

// Schema to create Reaction model
const reactionSchema = new Schema({
  reactionId: {},
  reactionBody: {},
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //  Use a getter method to format the timestamp on query
    // get:
  },
});

// =======================================

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //  Use a getter method to format the timestamp on query
      // get:
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
      // Array of nested documents created with the reactionSchema
      // [ReactionSchema]
    },
    // Schema Settings:
    // Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model("thoughts", userSchema);

module.exports = Thought;
