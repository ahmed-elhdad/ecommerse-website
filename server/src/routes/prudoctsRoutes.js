import express from "express";
import {
  createPrudoct,
  editPrudoct,
  getPrudoct,
  getPrudocts,
  removePrudoct,
} from "../controllers/prudocts.controllers.js";
const router = express.Router();
router.post("/:id", getPrudoct);
router.get("prudocts", getPrudocts);
router.post("/createPrudoct", createPrudoct);
router.post("/createPrudoct", createPrudoct);
router.put("/editPrudoct", editPrudoct);
router.delete("/removePrudoct", removePrudoct);
export default router;
