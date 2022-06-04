import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import User  from "../models/user";
import mongoose from "mongoose";
import { config } from "../config/config";
import express from "express";

// Generate jwt
const generateToken = (id:mongoose.ObjectId):string => {
  return jwt.sign({ id }, config.JWTSecret, {
    expiresIn: "1d",
  });
};

// @desc Register new user
// @route Post /api/users
// @access public
export const registerUser = asyncHandler(async (req:express.Request, res:express.Response):Promise<void> => {
 
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add fields");
  }
  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  // hash password using bycrpt by adding salt and pepper
  const salt = await bcrypt.genSalt(config.saltRounds);
  const hashedPassword = await bcrypt.hash(password + config.pepper, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  const token = generateToken(user._id);

  res.cookie("token", token, {
    maxAge: 1000 * 60 * 60 * 24,
  });
  
  res.status(201).json({
    name: user.name,
    email: user.email,
  
  });
})

// @desc Authenticate auser
// @route Post /api/users/login
// @access public

export const loginUser = asyncHandler(async (req:express.Request, res:express.Response):Promise<void> => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password + config.pepper, user.password))) {
    res.cookie("token", generateToken(user._id), {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.json({
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc get user data
// @route Get /api/users
// @access private
export const getMe = asyncHandler(async (req:express.Request, res:express.Response):Promise<void> => {
  const { name, email, admin } = req.body.user;
  res.status(200).json({ name, email, admin });
});

// @desc Logout user
// @route Get /api/users/logout
// @access private
export const logoutUser = asyncHandler(async (_req:express.Request, res:express.Response):Promise<void> => {
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
export const makeAdmin = asyncHandler(async (req:express.Request, res:express.Response):Promise<void> => {
  const email = req.params.email
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  user.admin = true;
  await user.save();
  res.status(200).json(user);
});

// @desc get all users
// @route GET /api/users
// @access private for admin only
export const getAllUsers = asyncHandler( async (req:express.Request,res:express.Response):Promise<void> =>{
        const users = await User.find({});
              res.status(200).json({
                  status:"success",
                  massage:"all users",
                  data:users
              })
          });

// @desc approve user
// @route POST /api/users/:id/approve
// @req body contains approve boolean
// @access private for admin only

export const approveUser = asyncHandler( async (req:express.Request,res:express.Response):Promise<void> =>{
            const _id = req.params.id;
            const approve = req.body.approve;
            const user = await User.findOne({ _id });
            if (!user) {
                res.status(404);
                throw new Error("User not found");
              }
            else {if(approve && user.approved){
                res.status(400).json({
                  status: "failed",
                  message:"already approved"
                });
              }else if(!approve && !user.approved){
                res.status(400).json({
                  status: "failed",
                  message:"already deactivated"
                });
              } else {
                  user.approved = approve;
                  await user.save();
              res.status(200).json({
                  status:"success",
                  massage:"user approved by admin",
                  data:user
              })}
          }   
});

