// utils/index.js
const { compareSync, hashSync } = require("bcrypt");
const { sign, verify } = require("jsonwebtoken"); 
const User = require("../models/user");

const SALT = process.env.SALT || 10;
const SECRET = process.env.SECRET || "fireblast";

const createUserInfo = (user) => {
  return {
    username: user.username,
    email: user.email,
    bear: user.bear,
    id: user._id,
  }
}

const createToken = (payload) => sign(payload, SECRET);

const comparePasswords = (password, passwordDigest) => compareSync(password, passwordDigest);

const hashPassword = (password) => hashSync(password, SALT);

const restrict = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error("Failed to provide token");
    }
    const token = req.headers.authorization.split(" ")[1];
    const { username } = verify(token, SECRET);
    if (username) {
      const [user] = await User.find({ username });
      res.locals.user = user;
      next();
    } else {
      throw new Error("User not authorized");
    }
  } catch (e) {
    return res.status(401).json({ message: e.message });
  }
};

module.exports = {
  createToken,
  createUserInfo,
  comparePasswords,
  hashPassword,
  restrict, 
}