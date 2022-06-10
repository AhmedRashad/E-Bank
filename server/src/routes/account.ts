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
} from "../controllers/account";

router.get("/", protect, protectAdmin, getAccounts);
router.post("/", protect, addAccount);
router.get("/:id", protect, getAccount);
router.put("/:id", protect, protectAdmin, updateAccount);
router.delete("/:id", protect, protectAdmin, deleteAccount);

export default router;
