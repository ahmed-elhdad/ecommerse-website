import express from "express";
import {
  addPrudoct,
  createCart,
  editPrudoct,
  getCart,
  removeCart,
  removePrudoct,
} from "../controllers/cartController.js";
const router = express.Router();
router.get("/getCart", getCart);
router.post("/createCart", createCart);
router.get("/addPrudoct", addPrudoct);
router.get("/editPrudoct", editPrudoct);
router.get("/removePrudoct", removePrudoct);
export default router;
