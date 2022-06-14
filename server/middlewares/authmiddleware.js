const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // get user from the token

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized token");
  }
});

module.exports = { protect };
