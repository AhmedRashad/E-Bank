const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  logoutUser,
  makeAdmin,
  getAllUsers,
  approveUser,
  deleteUser,
} = require("../controllers/users");
const { protect } = require("../middlewares/authmiddleware");
const { protectAdmin } = require("../middlewares/adminMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.get("/logout", protect, logoutUser);
router.put("/:email/admin", protect, protectAdmin, makeAdmin);
router.get("/", protect, protectAdmin, getAllUsers);
router.put("/:id", protect, protectAdmin, approveUser);
router.delete("/:id", protect, protectAdmin, deleteUser);
// router.post("/forget-password",forgetPassword)
// router.post("/reset-password/:id/:token",resetPassword)

module.exports = router;
