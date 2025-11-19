import express from "express";
import {
  addPrudoct,
  createCart,
  editPrudoct,
  getCart,
  removeCart,
  removePrudoct,
} from "../controllers/cart.controllers.js";
const router = express.Router();
router.get("/getCart", getCart);
router.post("/createCart", createCart);
router.post("/addPrudoct", addPrudoct);
router.put("/editPrudoct", editPrudoct);
router.delete("/removePrudoct", removePrudoct);
export default router;
