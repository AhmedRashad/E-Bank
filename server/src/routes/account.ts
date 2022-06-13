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
  getAccountsByUser,
  transferMoney,
  chargeMoney,
  depositMoney,
} from "../controllers/account";

router.get("/", protect, protectAdmin, getAccounts);
router.post("/", protect, addAccount);
router.get("/:id", protect, getAccount);
router.put("/:id", protect, protectAdmin, updateAccount);
router.delete("/:id", protect, protectAdmin, deleteAccount);
// get accounts by user
router.get("/user", protect, getAccountsByUser);
// transfer money to another account
router.put("/transfer/:id", protect, transferMoney);
// charge money from account
router.put("/charge/:id", protect, chargeMoney);
// deposit money to account
router.put("/deposit/:id", protect, depositMoney);


export default router;
