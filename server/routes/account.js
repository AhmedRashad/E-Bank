const express = require("express");
const router = express.Router();
const {
  getAccounts,
  addAccount,
  getAccount,
  updateAccount,
  deleteAccount,
  transferMoney,
  chargeMoney,
  depositMoney,
  getUserAccounts,
} = require("../controllers/account");
const { protect } = require("../middlewares/authmiddleware");
const { protectAdmin } = require("../middlewares/adminMiddleware");

router.get("/", protect, protectAdmin, getAccounts);
router.post("/", protect, addAccount);
router.get("/:id", protect, getAccount);
router.put("/:id", protect, protectAdmin, updateAccount);
router.delete("/:id", protect, protectAdmin, deleteAccount);
// get accounts by user
router.get("/user", protect, getUserAccounts);
// transfer money to another account
router.put("/transfer/:id", protect, transferMoney);
// charge money from account
router.put("/charge/:id", protect, chargeMoney);
// deposit money to account
router.put("/deposit/:id", protect, depositMoney);

module.exports = router;
