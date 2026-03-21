import  protect from "../middleware/protectMiddleware.js"
import express from 'express'
import { getAllCategoriesController, getCategoryController } from "../controllers/category.Controller.js";
const router = express.Router();

router.get("/category/:id", protect, getCategoryController)
router.get("/categories", protect, getAllCategoriesController)

export default router