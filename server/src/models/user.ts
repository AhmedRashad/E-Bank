import valdiator from "validator";
import mongoose from "mongoose";

export type UserObject = {
    _id:string,
    name:string,
    email:string,
    password:string,
    admin:boolean,
    approved:boolean,
}

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
      validate: [valdiator.isEmail, "Please add a valid email"],
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
    approved: {
        type: Boolean,
        default: false,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("User", userSchema);