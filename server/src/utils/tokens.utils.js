// import jwt from "jsonwebtoken";

// // access token = 1d , refreshtoken = 7d
// const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
// const REFRESH_SECRET = process.env.JWT_REFRESH_TOKENS;

// export const generateAccessTokens = (user) => {
//   return jwt.sign(
//     {
//       id: user.id,
//       role: user.role,
//     },
//     ACCESS_SECRET,
//     { expiresIn: "1d" },
//   );
// };

// export const verifyAccessToken = (token) => {
//   return jwt.verify(token, ACCESS_SECRET);
// };

// export const generateRefreshTokens = (user) => {
//   return jwt.sign(
//     {
//       id: user.id,
//     },
//     ACCESS_SECRET,
//     { expiresIn: "7d" },
//   );
// };

// export const verifyRefreshTokens = (token) => {
//   return jwt.verify(token, REFRESH_SECRET);
// };

import jwt from "jsonwebtoken";

const ACCESS_SECRET = process.env.JWT_SECRET || "123456";
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "123456";
export const generateAccessTokens = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    ACCESS_SECRET,
    { expiresIn: "1d" }
  );
};

export const verifyAccessToken = (token) => {
  return jwt.verify(token, ACCESS_SECRET);
};

export const generateRefreshTokens = (user) => {
  return jwt.sign(
    {
      id: user.id,
    },
    REFRESH_SECRET,
    { expiresIn: "7d" }
  );
};

export const verifyRefreshTokens = (token) => {
  return jwt.verify(token, REFRESH_SECRET);
};