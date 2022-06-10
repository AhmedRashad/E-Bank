import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import User  from "../models/user";
import mongoose from "mongoose";
import { config } from "../config/config";
import express from "express";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import sendEmail from "../utility/mailer";

// Generate jwt
const generateToken = (id: any) => {
  return jwt.sign({ id }, config.JWTSecret, {
    expiresIn: "30d",
  });
};

// @desc Register new user
// @route Post /api/users
// @access public
export const registerUser = asyncHandler(
  async (req: express.Request, res: express.Response): Promise<void> => {
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
    // hash password using bycrpt by adding salt and pepper
    const salt = await bcrypt.genSalt(config.saltRounds);
    const hashedPassword = await bcrypt.hash(password + config.pepper, salt);

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
    });
  }
);

// @desc Authenticate auser
// @route Post /api/users/login
// @access public

export const loginUser = asyncHandler(
  async (req: express.Request, res: express.Response): Promise<void> => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (
      user &&
      (await bcrypt.compare(password + config.pepper, user.password))
    ) {
      res.cookie("token", generateToken(user._id), {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      });

      res.json({
        name: user.name,
        email: user.email,
        phone: user.phone,
        admin: user.admin,
      });
    } else {
      res.status(400);
      throw new Error("Invalid credentials");
    }
  }
);

// @desc get user data
// @route Get /api/users
// @access private
export const getMe = asyncHandler(
  async (req: express.Request, res: express.Response): Promise<void> => {
    const { name, email, admin } = req.body.user;
    res.status(200).json({ name, email, admin });
  }
);

// @desc Logout user
// @route Get /api/users/logout
// @access private
export const logoutUser = asyncHandler(
  async (_req: express.Request, res: express.Response): Promise<void> => {
    res.cookie("token", " ", {
      maxAge: 1,
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
    });
  }
);

// @desc make user admin
// @route Put /api/users/:id/admin
// @access private
export const makeAdmin = asyncHandler(
  async (req: express.Request, res: express.Response): Promise<void> => {
    const email = req.params.email;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }
    user.admin = true;
    await user.save();
    res.status(200).json(user);
  }
);

// @desc get all users
// @route GET /api/users
// @access private for admin only
export const getAllUsers = asyncHandler(
  async (req: express.Request, res: express.Response): Promise<void> => {
    const users = await User.find({});
    res.status(200).json({
      status: "success",
      massage: "all users",
      data: users,
    });
  }
);

// @desc approve user
// @route POST /api/users/:id/approve
// @req body contains approve boolean
// @access private for admin only

export const approveUser = asyncHandler(
  async (req: express.Request, res: express.Response): Promise<void> => {
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
  }
);

export const actviateEmail = asyncHandler(
  async (req: express.Request, res: express.Response): Promise<void> => {}
);

export const forgetPassword = asyncHandler(
  async (req: express.Request, res: express.Response): Promise<void> => {
    const email = req.body.email;
    const user = await User.findOne({ email });
    if (user) {
      const token = await generateToken(user._id);
      const link = `http://${config.forntendHost}:${config.frontendPort}/reset-password/${user._id}/${token}`;
      const subject = "reset your passaword at E-Bank";
      const message = `Hello , ${user.name}\n
    Someone has requested a link to change your password. You can do this through the link below.\n
    ${link}\n
    If you didn't request this, please ignore this email.Your password won't change until you access the link above and create a new one.
    `;
      sendEmail(user.email, subject, message)
        .then((result) => {
          res.json({
            success: true,
            message: "reset password link had send to your email",
            info: result,
          });
        })
        .catch((error) => {
          res.status(500);
          throw error;
        });
    } else {
      res.status(404).json({
        success: false,
        message: "there is no user registered with this email",
      });
    }
  }
);

export const resetPassword = asyncHandler(async (req: express.Request, res: express.Response): Promise<void> => {
  const _id = req.params.id;
  const token = req.params.token;
  const user = await User.findOne({ _id });
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    } else {
        const JwtPayload = jwt.verify(token, config.JWTSecret) as JwtPayload;
        if(JwtPayload.password == user.password){
        const newPassword = req.body.newpassword;
        user.password = newPassword;
        await user.save();
        res.json({
          success: true,
          message: "password changed for user " + user.name,
          data:user
        })
        } else {
          res.status(400).json({
            success: false,
            message :"this link is used before, please try again with diffrent link"
        });
        }
      }
      }
);