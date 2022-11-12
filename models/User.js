const { ObjectId } = require("mongoose").Types;
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
      // https://mongoosejs.com/docs/validation.html#async-custom-validators
      validate: {
        validator: function (v) {
          return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address.`,
      },
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId, // Array of _id values referencing the Thought model
      ref: "Thought",
    },
  ],
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

// Schema Settings:
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
