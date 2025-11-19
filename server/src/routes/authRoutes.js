import express from "express";
const router = express.Router();
import {
  delUser,
  login,
  register,
  resetPassword,
  me,
} from "../controllers/auth.controllers.js";
router.get("/me", me);
router.post("/register", register);
router.post("/login", login);
router.post("/resetPassword", resetPassword);
router.delete("/delUser", delUser);

export default router;
