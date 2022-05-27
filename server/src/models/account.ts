import mongoose from "mongoose";
// schema bank account
const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    default: 0,
    required: true,
  },
  id_government: {
    type: String,
    required: true,
  },
});
