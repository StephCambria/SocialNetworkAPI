const { connect, connection } = require("mongoose");

// Wrap Mongoose around local connection to MongoDB
const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost/socialNetworkApi";

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export the connection
module.exports = connection;
