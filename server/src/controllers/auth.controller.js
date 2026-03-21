// import { createUser } from "../models/auth.Model.js";
// import bcrypt from "bcryptjs";
// import { findUserByEmail, saveRefreshToken } from "../models/user.Model.js";

// import {
//   setAccessTokenCookie,
//   setRefreshTokenCookie,
// } from "../utils/cookies.utils.js";

// import {
//   generateAccessTokens,
//   verifyAccessToken,
//   generateRefreshTokens,
//   verifyRefreshTokens,
// } from "../utils/tokens.utils.js";
// import { asyncHandler } from "../middleware/asyncHandler.Middleware.js";

// /////////// Register logic

// export const register = asyncHandler(async (req, res) => {
//   const { name, email, password, role } = req.validateData;

//   try {
//     const existedUser = await findUserByEmail(email);

//     if (existedUser) {
//       return res.status(400).json({ message: "email already exists" });
//     }

//     const hashed_password = await bcrypt.hash(password, 10);

//     const newUser = await createUser(name, email, hashed_password, role);
//     console.log(newUser);
//     if (!newUser) {
//       return res.status(400).json({ message: "failed to create user" });
//     }

//     // 🔥 هنا ننشئ التوكن
//     const accessToken = generateAccessTokens(newUser);

//     return res.status(201).json({
//       message: "user created successfully",
//       user: newUser,
//       accessToken,
//     });
//   } catch (err) {
//     return res
//       .status(500)
//       .json({ message: "internal server error, in register" });
//   }
// });

// //////////// login logic

// export const login = asyncHandler(async (req, res) => {
//   const { email, password } = req.validateData;

//   try {
//     if (!email || !password) {
//       const error = new Error("All fields are required");
//       error.statusCode = 400;
//       throw error;
//       return res.status(400).json({ message: "all fields are required" });
//     }

//     const isExist = await findUserByEmail(email);

//     if (!isExist) {
//       const error = new Error("User not registered, please register to log in");
//       error.statusCode = 400;
//       throw error;
//     }

//     const isMatch = await bcrypt.compare(password, isExist.hashed_password);

//     if (!isMatch) {
//       const error = new Error("incorrect password or email");
//       error.statusCode = 400;
//       throw error;
//     }

//     //generate tokens => access. refresh
//     const accessToken = generateAccessTokens(isExist);
//     const refreshTokens = generateRefreshTokens(isExist);
//     console.log(accessToken);
//     //should store the refresh tokens in db
//     await saveRefreshToken(isExist.id, refreshTokens);
//     //set tokens in cookies
//     setAccessTokenCookie(res, accessToken);
//     setRefreshTokenCookie(res, refreshTokens);

//     return res
//       .status(200)
//       .json({ message: "Login successful", accessToken, user: isExist });
//   } catch (err) {
//     const error = new Error("incorrect password or email");
//     error.statusCode = 400;
//     throw error;
//   }
// });

// export const refreshToken = async (req, res) => {
//   const token = req.cookies.refreshToken;

//   try {
//     if (!token) {
//       return res
//         .status(401)
//         .json({ message: "Unauthorized, no refresh token provided" });
//     }

//     const decoded = verifyRefreshTokens(token);

//     const user = await findUserByEmail(decoded.email);

//     if (!user) {
//       return res.status(401).json({ message: "unauthorized" });
//     }

//     const newAccessTokens = generateAccessTokens(user);

//     setAccessTokenCookie(res, newAccessTokens);

//     res.json({ message: "access tokens refreshed successfully" });
//   } catch (err) {
//     return res;
//     throw err;
//   }
// };

// export const logout = asyncHandler(async (req, res) => {
//   try {
//     if (!token)
//       return res.status(400).json({ message: "No refresh token provided" });

//     const decoded = verifyRefreshTokens(token);
//     await saveRefreshToken(decoded.id, null);

//     res.clearCookie("accessToken");
//     res.clearCookie("refreshTokens");

//     res.status(200).json({ message: "Logged out successfully" });
//   } catch (err) {
//     throw err;
//   }
// });

import bcrypt from "bcryptjs";
import { createUser } from "../models/auth.Model.js";
import {
  findUserByEmail,
  getUserById,
  saveRefreshToken,
} from "../models/user.Model.js";
import {
  generateAccessTokens,
  generateRefreshTokens,
  verifyRefreshTokens,
} from "../utils/tokens.utils.js";
import {
  setAccessTokenCookie,
  setRefreshTokenCookie,
} from "../utils/cookies.utils.js";
import { asyncHandler } from "../middleware/asyncHandler.Middleware.js";

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.validateData;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existedUser = await findUserByEmail(email);
  if (existedUser)
    return res.status(400).json({ message: "Email already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await createUser(name, email, hashedPassword, "user");

  if (!newUser)
    return res.status(400).json({ message: "Failed to create user" });

  res
    .status(201)
    .json({
      message: "User created successfully",
      user: { id: newUser.id, name, email, role: "user" },
    });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.validateData;

  if (!email || !password)
    return res.status(400).json({ message: "All fields are required" });

  const user = await findUserByEmail(email);
  if (!user) return res.status(400).json({ message: "User not registered" });

  const isMatch = await bcrypt.compare(password, user.hashed_password);
  if (!isMatch)
    return res.status(400).json({ message: "Email or password incorrect" });

  const accessToken = generateAccessTokens(user);
  const refreshToken = generateRefreshTokens(user);

  await saveRefreshToken(user.id, refreshToken);

  setAccessTokenCookie(res, accessToken);
  setRefreshTokenCookie(res, refreshToken);

  res.status(200).json({
    message: "Logged in successfully",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

export const logout = asyncHandler(async (req, res) => {
  const token = req.cookies.refreshTokens;

  if (!token)
    return res.status(400).json({ message: "No refresh token provided" });

  const decoded = verifyRefreshTokens(token);
  await saveRefreshToken(decoded.id, null);

  res.clearCookie("accessToken");
  res.clearCookie("refreshTokens");

  res.status(200).json({ message: "Logged out successfully" });
});

export const currentUser = asyncHandler(async (req, res) => {
  const id = req.user.id;

  const me = await getUserById(id);
  if (!me) return res.status(404).json({ message: "User not found" });

  return res.status(200).json({ message: "User fetched successfully", me });
});
