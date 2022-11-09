const { Schema, model } = require("mongoose");
//const assignmentSchema = require('./Assignment');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
      //max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //max_length: 50,
      // Must match a valid email address (look into Mongoose's matching validation)
    },
    thoughts: {
      type: String,
      // Array of _id values referencing the Thought model
    },
    friends: {
      type: String,
      // Array of _id values referencing the User model (self-reference)
    },
    //assignments: [assignmentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("user", userSchema);

module.exports = User;
