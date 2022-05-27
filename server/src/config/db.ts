import mongoose, { connect } from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoUri as string);
    console.log(`Mongodb Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
