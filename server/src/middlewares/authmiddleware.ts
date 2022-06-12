import express, { NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import asyncHandler from "express-async-handler"
import User from "../models/user";
import { config } from "../config/config"

const protect = asyncHandler(async (req:express.Request, res:express.Response, next:NextFunction):Promise<void> => {
  const token = req.cookies.token;
  if (token) {
    try {
      // verify token
      const decoded = jwt.verify(token, config.JWTSecret) as JwtPayload;
      // get user from the token
      req.body.user = await User.findById(decoded.id)
        .populate("accounts_id")
        .select("-password");

      next();
    } catch (error) {
      console.log(error);
      throw new Error("Not authorized");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized token");
  }
});

export default protect;