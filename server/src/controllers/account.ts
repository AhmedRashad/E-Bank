import expressAsyncHandler from "express-async-handler";
import express from "express";
const Account = require("../models/account");
import User from "../models/user";

// @desc    Get all accounts
// @route   GET /api/accounts
// @access  Private
export const getAccounts = expressAsyncHandler(
  async (_req: express.Request, res: express.Response) => {
    const accounts = await Account.find()
      .populate("user_id")
      .select("-password");
    res.status(200).json(accounts);
  }
);

// @desc   add account and add account to user
// @route  Post /api/newAccount
// @access Private
export const addAccount = expressAsyncHandler(
  async (req: express.Request, res: express.Response) => {
    const account = await Account.create(req.body);
    const user_id = req.body.user._id;
    account.user_id = user_id;
    await account.save();
    res.status(201).json(account);
  }
);

// @desc   Get account by id
// @route  GET /api/accounts/:id
// @access Private
export const getAccount = expressAsyncHandler(
  async (req: express.Request, res: express.Response) => {
    const account = await Account.findById(req.params.id);
    res.status(200).json(account);
  }
);

// @desc   Update account
// @route  PUT /api/accounts/:id
// @access Private
export const updateAccount = expressAsyncHandler(
  async (req: express.Request, res: express.Response) => {
    const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(account);
  }
);

// @desc   Delete account
// @route  DELETE /api/accounts/:id
// @access Private
export const deleteAccount = expressAsyncHandler(
  async (req: express.Request, res: express.Response) => {
    await Account.findByIdAndDelete(req.params.id);
    res.status(204).json(req.params.id);
  }
);

// @desc   transfer money to another account
// @route  PUT /api/accounts/transfer/:id
// @access Private to user
export const transferMoney = expressAsyncHandler(
  async (req: express.Request, res: express.Response) => {
    const account = await Account.findById(req.params.id);
    const account2 = await Account.findOne({
      account_number: req.body.account_number,
    });
    if (!account2) {
      res.status(404);
      throw new Error("Account not found");
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
  }
);

// @desc   Charge money from account
// @route  PUT /api/accounts/charge/:id
// @access Private to user
export const chargeMoney = expressAsyncHandler(
  async (req: express.Request, res: express.Response) => {
    const account = await Account.findById(req.params.id);
    if (account.current_balance < req.body.amount) {
      res.status(400).json({ message: "Insufficient funds" });
    } else {
      account.current_balance -= req.body.amount;
      await account.save();
      res.status(200).json(account);
    }
  }
);

// @desc   Deposit money to account
// @route  PUT /api/accounts/deposit/:id
// @access Private to user
export const depositMoney = expressAsyncHandler(
  async (req: express.Request, res: express.Response) => {
    const account = await Account.findById(req.params.id);
    account.current_balance += req.body.amount;
    await account.save();
    res.status(200).json(account);
  }
);







