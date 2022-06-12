import express from "express";
import protect from "../middlewares/authmiddleware";
import protectAdmin from "../middlewares/adminMiddleware";

const router = express.Router();

import {
  getAccounts,
  addAccount,
  getAccount,
  updateAccount,
  deleteAccount,
  getAccountsByUserId,
} from "../controllers/account";

router.get("/", protect, protectAdmin, getAccounts);
router.post("/", protect, addAccount);
router.get("/:id", protect, getAccount);
router.put("/:id", protect, updateAccount);
router.delete("/:id", protect, protectAdmin, deleteAccount);
router.get("/user/:id", protect, getAccountsByUserId);

export default router;
