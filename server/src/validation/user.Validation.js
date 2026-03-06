import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(3).max(100).required().messages({
    "string.min": "Name must be at least 3 characters",
    "string.max": "Name must be at most 100 character",
    "string.required": "Name is required",
    "string.empty": "Name is required",
  }),

  email: Joi.string().min(6).max(255).email().required().messages({
    "string.min": "Email must be at least 6 characters",
    "string.max": "Email must be at most 255 character",
    "string.required": "Email is required",
    "string.empty": "Email is required",
    "string.email": "Email must be a valid email address",
  }),
  password: Joi.string().min(6).max(1024).required().messages({
    "string.min": "Password must be at least 6 characters",
    "string.max": "Password must be at most 1024 character",
    "string.required": "Password is required",
    "string.empty": "Password is required",
    "string.pattern.base": "Password should contain letters and numbers",
  }),

  role: Joi.string()
    .valid("user", "manager", "employee")
    .default("user")
    // .required()
    .messages({
      "string.valid": "Role must be either user or employee",
      "string.required": "Role is required",
      "string.empty": "Role is required",
    }),
});
