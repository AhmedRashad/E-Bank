const mongoose = require("mongoose");

const conectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error}`.red);
    process.exit(1);
  }
};
module.exports = conectDB;
