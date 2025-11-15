import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import dotenv from "dotenv";
import { AuthService } from "../services/authService.js";
dotenv.config();

export const register = async (req, res) => {
  await AuthService.register(req.body, res);
};

export const login = async (req, res) => {
  await AuthService.login(req.body, res);
};
export const resetPassword = async (req, res) => {
  await AuthService.resetPassword(req.body, res);
};
export const delUser = async (req, res) => {
  await AuthService.delUser(req.body, res);
};
