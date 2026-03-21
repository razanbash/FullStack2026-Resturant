import protect from "../middleware/protectMiddleware.js"
import express from 'express'
import { getAllMenuItemsController, getMenuItemController } from "../controllers/menu.Controller.js";
const router = express.Router();

router.get("/menu/:id", protect, getMenuItemController)
router.get("/menu", getAllMenuItemsController)

export default router