import mongoose from "mongoose";
// schema bank account
const accountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter name"],
  },
  email: {
    type: String,
    required: [true, "please enter email"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  id_government: {
    type: String,
    required: [true, "please enter government id"],
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  birth_date: {
    type: Date,
    required: [true, "please enter birth date"],
  },
  work: {
    type: String,
    required: [true, "please enter work"],
  },
  address: {
    type: String,
    required: [true, "please enter address"],
  },
  phone: {
    type: String,
    required: [true, "please enter phone"],
  },
  account_name: {
    type: String,
    required: [true, "please enter account name"],
  },
  account_number: {
    type: String,
    required: [true, "please enter account number"],
  },
  amount: {
    type: Number,
    default: 0,
    required: [true, "please enter amount"],
  },
  status: {
    type: String,
    default: "pending",
    required: [true, "please enter status"],
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Account", accountSchema);

