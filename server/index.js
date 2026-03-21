import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";
import authRoutes from "./src/routes/authRoutes.js";
import express from "express";
import { errorHandler } from "./src/middleware/errorHandler.Middleware.js";
import cors from "cors";
import { globalRateLimit } from "./src/middleware/globalRateLimit.Middleware.js";
import userRoutes from "./src/routes/userRoutes.js";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import menuRoutes from "./src/routes/menuRoutes.js";
import categoryRoutes from "./src/Routes/categoryRoutes.js";
 dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(globalRateLimit);
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);
app.use("/api", menuRoutes);
app.use("/api", categoryRoutes);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ✅ ${process.env.PORT}`);
});
