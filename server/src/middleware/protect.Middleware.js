// import jwt from "jsonwebtoken";
// export const protect = (req, res, next) => {
//   let token = req.cookies.accessToken || null;
//   console.log(token);
//   if (token) {
//     return res.status(401).json({ message: "Unauthorized, no token" });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(500).json({ message: "internal server error" });
//   }
// };


// import jwt from "jsonwebtoken";

// export const protect = (req, res, next) => {

//   const token = req.headers.authorization?.split(" ")[1];

//   console.log(token);

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized, no token" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(500).json({ message: "internal server error" });
//   }

// };


import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {

  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }

};