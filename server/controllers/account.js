const asyncHandler = require("express-async-handler");

const Account = require("../models/account");
const User = require("../models/user");

// @desc    Get all accounts
// @route   GET /api/accounts
// @access  Private
const getAccounts = asyncHandler(async (req, res) => {
  const accounts = await Account.find().populate("user", "name email");
  res.status(200).json(accounts);
});

// @desc   add account and add account to user
// @route  Post /api/newAccount
// @access Private
const addAccount = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  // check if email exists
  const emailExists = await Account.findOne({ email: req.body.email });
  if (emailExists) {
    res.status(400).json({ message: "The email is used Try another email" });
  }

  // check if account_number exists
  const accountNumberExists = await Account.findOne({
    account_number: req.body.account_number,
  });
  if (accountNumberExists) {
    res
      .status(400)
      .json({ message: "The account number is used Try another number" });
  }

  const account = await Account.create({
    ...req.body,
    user: user._id,
  });
  res.status(201).json(account);
});

// @desc   Get account by id
// @route  GET /api/accounts/:id
// @access Private
const getAccount = asyncHandler(async (req, res) => {
  const account = await Account.findById(req.params.id);
  res.status(200).json(account);
});

// @desc   Update account
// @route  PUT /api/accounts/:id
// @access Private
const updateAccount = asyncHandler(async (req, res) => {
  const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json(account);
});

// @desc   Delete account
// @route  DELETE /api/accounts/:id
// @access Private
const deleteAccount = asyncHandler(async (req, res) => {
  await Account.findByIdAndDelete(req.params.id);
  res.status(204).json(req.params.id);
});

// @desc   transfer money to another account
// @route  PUT /api/accounts/transfer/:id
// @access Private to user
const transferMoney = asyncHandler(async (req, res) => {
  const account = await Account.findById(req.params.id);
  const account2 = await Account.findOne({
    account_number: req.body.account_number,
  });

  if (!account2) {
    res.status(404).json({ message: "Account not found" });
  }

  if (account.current_balance < req.body.amount) {
    res.status(400).json({ message: "Insufficient funds" });
  } else {
    account.current_balance -= req.body.amount;
    account2.current_balance += req.body.amount;
    await account.save();
    await account2.save();
    res.status(200).json(account);
  }
});

// @desc   Charge money from account
// @route  PUT /api/accounts/charge/:id
// @access Private to user
const chargeMoney = asyncHandler(async (req, res) => {
  const account = await Account.findById(req.params.id);
  if (account.current_balance < req.body.amount) {
    res.status(400).json({ message: "Insufficient funds" });
  } else {
    account.current_balance -= req.body.amount;
    await account.save();
    res.status(200).json(account);
  }
});

// @desc   Deposit money to account
// @route  PUT /api/accounts/deposit/:id
// @access Private to user
const depositMoney = asyncHandler(async (req, res) => {
  const account = await Account.findById(req.params.id);
  account.current_balance += req.body.amount;
  await account.save();
  res.status(200).json(account);
});

module.exports = {
  getAccounts,
  addAccount,
  getAccount,
  updateAccount,
  deleteAccount,
  transferMoney,
  chargeMoney,
  depositMoney,
};
