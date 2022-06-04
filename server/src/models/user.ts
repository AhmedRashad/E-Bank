import valdiator from "validator";
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pleace add a name"],
    },
    email: {
      type: String,
      required: [true, "Pleace add a email"],
      unique: true,
      validate: [isEmail, "Please add a valid email"],
    },
    password: {
      type: String,
      required: [true, "Pleace add a password"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);