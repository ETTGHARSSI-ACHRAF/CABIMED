const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MDB_CONNECT);

    console.log("MongoDB connected");
  } catch (error) {
    console.log("Something went wrong with Database connection");
    process.exit(1);
  }
};

module.exports = connectDB;