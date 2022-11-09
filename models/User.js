const { Schema, model } = require("mongoose");

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // Must match a valid email address
      // You can use a regex: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
      // Or you can write a seperate function?
      validate: {
        validator: function (v) {
          return 
        },
        // message: "Not a valid email address."
      }
    },
    thoughts: {
      type: Schema.Types.ObjectId, // Array of _id values referencing the Thought model
      ref: "Thought",
    },
    friends: [
      {
        type: Schema.Types.ObjectId, // Array of _id values referencing the User model (self-reference)
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model("user", userSchema);

module.exports = User;
