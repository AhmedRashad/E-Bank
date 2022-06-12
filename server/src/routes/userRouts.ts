import express from "express";
import protect from "../middlewares/authmiddleware";
import protectAdmin from "../middlewares/adminMiddleware";
import {
  getMe,
  loginUser,
  registerUser,
  logoutUser,
  makeAdmin,
  getAllUsers,
  approveUser,
  forgetPassword,
  resetPassword,
  deleteUser
 } from "../controllers/users";

const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.get("/logout", protect, logoutUser);
router.put("/:email/admin", protect, protectAdmin, makeAdmin);
router.get("/", protect, protectAdmin, getAllUsers);
router.put("/:id", protect, approveUser);
router.delete("/:id", protect, protectAdmin, deleteUser);
router.post("/forget-password",forgetPassword)
router.post("/reset-password/:id/:token",resetPassword)


export default router;