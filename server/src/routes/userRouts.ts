import express from "express";
import protect from "../middlewares/authmiddleware";
import protectAdmin from "../middlewares/adminMiddleware";
import { getMe, loginUser, registerUser,logoutUser, makeAdmin, getAllUsers, approveUser, forgetPassword, resetPassword } from "../controllers/users";

const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.get("/logout", protect, logoutUser);
router.put("/:email/admin", protect, protectAdmin, makeAdmin);
router.get("/all", protect, protectAdmin, getAllUsers);
router.post("/approve", protect, protectAdmin, approveUser);
router.post("/forget-password",forgetPassword)
router.post("/reset-password/:id/:token",resetPassword)


export default router;