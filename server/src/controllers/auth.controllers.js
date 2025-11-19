import dotenv from "dotenv";
import { AuthService } from "../services/authService.js";
dotenv.config();
export const me = async (req, res) => {
  await AuthService.me(req.body, res);
};
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
