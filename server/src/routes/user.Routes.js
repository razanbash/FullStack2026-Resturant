import { getAllUsersController, getUserByIdController, findUserByEmailController } from "../controllers/user.Controller.js";
import { protect } from "../middleware/protect.Middleware.js";
import express from "express";
import { managerOnly } from "../middleware/manegerOnly.Middleware.js";


const router = express.Router();

router.get("/user/id", protect, getUserByIdController);
router.get("/users", protect, getAllUsersController);
router.post("/users/email", protect, findUserByEmailController);
export default router;