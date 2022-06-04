import mongoose from "mongoose";
// schema bank account
const accountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter name"],
  },
  email: {
    type: String,
    required: [true, "please enter email"],
  },
  phone: {
    type: String,
    required: [true, "please enter phone"],
  },
  birth_date: {
    type: Date,
    required: [true, "please enter birth date"],
  },
  work: {
    type: String,
    required: [true, "please enter work"],
  },
  country: {
    type: String,
    required: [true, "please enter country"],
  },
  streetAddress: {
    type: String,
    required: [true, "please enter street address"],
  },
  city: {
    type: String,
    required: [true, "please enter city"],
  },
  stateProvince: {
    type: String,
    required: [true, "please enter state province"],
  },
  zipPostalCode: {
    type: String,
    required: [true, "please enter zip postal code"],
  },
  id_government: {
    type: String,
    required: [true, "please enter government id"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  account_name: {
    type: String,
    required: [true, "please enter account name"],
  },
  account_number: {
    type: String,
    required: [true, "please enter account number"],
  },
  current_balance: {
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

