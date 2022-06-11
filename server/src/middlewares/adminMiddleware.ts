import asyncHandler from "express-async-handler";
import express, { NextFunction } from "express";

const protectAdmin = asyncHandler(async (req:express.Request, res:express.Response, next:NextFunction):Promise<void> => {
  const user = req.body.user;  
  if (user.admin) {
    res.status(403);
    throw new Error("Not authorized");
  } else {
    next();
  }
});
export default protectAdmin;