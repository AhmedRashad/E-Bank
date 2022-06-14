const asyncHandler = require("express-async-handler");
const User = require("../models/user");

const protectAdmin = asyncHandler(async (req, res, next) => {
  const user = req.user;
  if (user.admin) {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized");
  }
});
module.exports = { protectAdmin };
