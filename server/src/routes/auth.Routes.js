import { login, register } from "../controllers/auth.controller.js";
import { registerSchema, loginSchema } from "../validation/user.Validation.js";
import { validate } from "../middleware/validateMiddleware.js";
import express from "express";

const router = express.Router();

router.post("/auth/register", validate(registerSchema), register);
router.post("/auth/login", validate (loginSchema),login);
export default router;
