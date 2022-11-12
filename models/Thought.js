const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

// Schema to create Reaction model
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    max_length: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //  Use a getter method to format the timestamp on query
    // https://mongoosejs.com/docs/tutorials/getters-setters.html
    // https://mongoosejs.com/docs/timestamps.html
    // https://mongoosejs.com/docs/tutorials/dates.html
    // For simplicity I'm just using moment
    get: createdAtValue => moment(createdAtValue).format("MMM Do YYYY [at] h:mm a"),
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
      get: createdAtValue => moment(createdAtValue).format("MMM Do YYYY [at] h:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions:
      // Array of nested documents created with the reactionSchema
      [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

// Schema Settings:
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thoughts", thoughtSchema);

module.exports = Thought;
