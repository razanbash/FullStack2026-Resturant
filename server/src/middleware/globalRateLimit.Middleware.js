// import rateLimit from "express-rate-limit";

// export const globalRateLimit = rateLimit({
//   windowMs: 60 * 60 * 15, // 15 minutes
//   max: 5, // limit each IP to 100 requests per windowMs
//   message: {
//     success: false,
//     message: "Too many requests, please try again after 15 minutes.",
//   },

//   standerHeader: true,
//   legacyHeaders: false
// });
 

import rateLimit from "express-rate-limit";

export const globalRateLimit = rateLimit({
  windowMs: 60 * 60 * 15, // 15 minutes
  max: 5,
  message: "Too many requests, please try again after 15 minutes.",
  legacyHeaders: false
});