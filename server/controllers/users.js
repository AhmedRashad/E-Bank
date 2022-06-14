const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

//import sendEmail from "../utility/mailer";
const ObjectId = mongoose.Types.ObjectId;

// Generate jwt
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// @desc Register new user
// @route Post /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!name || !email || !password || !phone) {
    res.status(400);
    throw new Error("Please add fields");
  }
  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });
  const token = generateToken(user._id);

  res.cookie("token", token, {
    maxAge: 1000 * 60 * 60 * 24,
  });

  res.status(201).json({
    name: user.name,
    email: user.email,
    phone: user.phone,
    admin: user.admin,
    status: user.status,
  });
});

// @desc Authenticate auser
// @route Post /api/users/login
// @access public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.cookie("token", generateToken(user._id), {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.json({
      name: user.name,
      email: user.email,
      phone: user.phone,
      admin: user.admin,
      status: user.status,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc get user data
// @route Get /api/users
// @access private
const getMe = asyncHandler(async (req, res) => {
  const user = await User.aggregate([
    {
      $match: {
        _id: ObjectId(req.user.id),
      },
    },
    {
      $lookup: {
        from: "accounts",
        localField: "_id",
        foreignField: "user",
        as: "accounts",
      },
    },
    {
      $project: {
        name: 1,
        email: 1,
        phone: 1,
        admin: 1,
        status: 1,
        accounts: 1,
      },
    },
  ]);
  res.status(200).json(user);
});

// @desc Logout user
// @route Get /api/users/logout
// @access private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("token", " ", {
    maxAge: 1,
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
  });
});

// @desc make user admin
// @route Put /api/users/:id/admin
// @access private
const makeAdmin = asyncHandler(async (req, res) => {
  const email = req.params.email;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  user.admin = true;
  await user.save();
  res.status(200).json(user);
});

// @desc get all users with accounts for each user
// @route GET /api/users
// @access private for admin only
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.aggregate([
    {
      $lookup: {
        from: "accounts",
        localField: "_id",
        foreignField: "user",
        as: "accounts",
      },
    },
    {
      $match: {
        admin: false,
      },
    },
    {
      $sort: {
        status: -1,
      },
    },
    {
      $project: {
        name: 1,
        email: 1,
        phone: 1,
        admin: 1,
        status: 1,
        accounts: 1,
      },
    },
  ]);
  res.status(200).json(users);
});

// @desc approve user
// @route POST /api/users/:id/approve
// @req body contains approve boolean
// @access private for admin only

const approveUser = asyncHandler(async (req, res) => {
  const _id = req.params.id;

  const status = req.body.status;

  const user = await User.findOne({ _id });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  user.status = status;
  await user.save();
  res.status(200).json(user);
});

// @desc   Delete user
// @route  DELETE /api/users/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).json(req.params.id);
});

//  const actviateEmail = asyncHandler(
//   async (req, res) => {}
// );

//  const forgetPassword = asyncHandler(
//   async (req, res) => {
//     const email = req.body.email;
//     const user = await User.findOne({ email });
//     if (user) {
//       const token = await generateToken(user._id);
//       const link = `http://${config.forntendHost}:${config.frontendPort}/reset-password/${user._id}/${token}`;
//       const subject = "reset your passaword at E-Bank";
//       const message = `Hello , ${user.name}\n
//     Someone has requested a link to change your password. You can do this through the link below.\n
//     ${link}\n
//     If you didn't request this, please ignore this email.Your password won't change until you access the link above and create a new one.
//     `;
//       sendEmail(user.email, subject, message)
//         .then((result) => {
//           res.json({
//             success: true,
//             message: "reset password link had send to your email",
//             info: result,
//           });
//         })
//         .catch((error) => {
//           res.status(500);
//           throw error;
//         });
//     } else {
//       res.status(404).json({
//         success: false,
//         message: "there is no user registered with this email",
//       });
//     }
//   }
// );

//  const resetPassword = asyncHandler(async (req, res) => {
//   const _id = req.params.id;
//   const token = req.params.token;
//   const user = await User.findOne({ _id });
//     if (!user) {
//         res.status(404);
//         throw new Error("User not found");
//     } else {
//         const JwtPayload = jwt.verify(token, config.JWTSecret) as JwtPayload;
//         if(JwtPayload.password == user.password){
//         const newPassword = req.body.newpassword;
//         user.password = newPassword;
//         await user.save();
//         res.json({
//           success: true,
//           message: "password changed for user " + user.name,
//           data:user
//         })
//         } else {
//           res.status(400).json({
//             success: false,
//             message :"this link is used before, please try again with diffrent link"
//         });
//         }
//       }
//       }
// );

module.exports = {
  registerUser,
  loginUser,
  getMe,
  logoutUser,
  makeAdmin,
  getAllUsers,
  approveUser,
  deleteUser,
};
