import express from "express";

const router = express.Router();

import {
  getAccounts,
  addAccount,
  getAccount,
  updateAccount,
  deleteAccount,
} from "../controllers/account";

router.get("/", getAccounts);
router.post("/", addAccount);
router.get("/:id", getAccount);
router.put("/:id", updateAccount);
router.delete("/:id", deleteAccount);

export default router;
