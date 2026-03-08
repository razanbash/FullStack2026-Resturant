import { createUser } from "../models/auth.Model.js";
import bcrypt from "bcryptjs";
import { findUserByEmail, saveRefreshToken } from "../models/user.Model.js";

import {
  setAccessTokenCookie,
  setRefreshTokenCookie,
} from "../utils/cookies.utils.js";

import {
  generateAccessTokens,
  verifyAccessToken,
  generateRefreshTokens,
  verifyRefreshTokens,
} from "../utils/tokens.utils.js";

/////////// Register logic

export const register = async (req, res) => {
  const { name, email, password, role } = req.validateData;

  try {
    const existedUser = await findUserByEmail(email);

    if (existedUser) {
      return res.status(400).json({ message: "email already exists" });
    }

    const hashed_password = await bcrypt.hash(password, 10);

    const newUser = await createUser(name, email, hashed_password, role);

    if (!newUser) {
      return res.status(400).json({ message: "failed to create user" });
    }

    // 🔥 هنا ننشئ التوكن
    const accessToken = generateAccessTokens(newUser);

    return res.status(201).json({
      message: "user created successfully",
      user: newUser,
      accessToken,
    });

  } catch (err) {
    return res
      .status(500)
      .json({ message: "internal server error, in register" });
  }
};

//////////// login logic

export const login = async (req, res) => {
  const { email, password } = req.validateData;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "all fields are required" });
    }

    const isExist = await findUserByEmail(email);

    if (!isExist) {
      return res.status(400).json({
        message: "User not registered, please register to log in",
      });
    }

    const isMatch = await bcrypt.compare(password, isExist.hashed_password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "password or email is incorrect" });
    }

    //generate tokens => access. refresh
    const accessToken = generateAccessTokens(isExist);
    const refreshTokens = generateRefreshTokens(isExist);
    console.log(accessToken);
    //should store the refresh tokens in db
    await saveRefreshToken(isExist.id, refreshTokens);
    //set tokens in cookies
    setAccessTokenCookie(res, accessToken);
    setRefreshTokenCookie(res, refreshTokens);

    return res.status(200).json({ message: "Login successful",accessToken, user: isExist });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "internal server error in login" });
  }
};

export const refreshToken = async (req, res) => {
  const token = req.cookies.refreshToken;

  try {
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized, no refresh token provided" });
    }

    const decoded = verifyRefreshTokens(token);

    const user = await findUserByEmail(decoded.email);

    if (!user) {
      return res.status(401).json({ message: "unauthorized" });
    }

    const newAccessTokens = generateAccessTokens(user);

    setAccessTokenCookie(res, newAccessTokens);

    res.json({ message: "access tokens refreshed successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "internal server error in refresh tokens" });
  }
};
