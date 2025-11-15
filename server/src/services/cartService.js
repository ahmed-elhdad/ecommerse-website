import mongoose from "mongoose";
import User from "../models/User.js";

export class CartService {
  static async getCart(data, res) {
    const { userId } = data;
    const isValidId = mongoose.Types.ObjectId.isValid(userId);
    if (!isValidId) {
      res.status(301).json({ error: "valid Id" });
    }
    const existing = User.findOne({ userId });
    if (!existing) {
      res.status(404).json({ error: "not found user" });
      return;
    }
    if (!existing.cart) {
      res.status(404).json({ error: "The user don't has any cart" });
        return
    }
    res.status(201).json({ data: existing.cart });
  }
  static async createCart(data, res) {}
  static async removeCart(data, res) {}
  static async addPrudoct(data, res) {}
  static async editPrudoct(data, res) {}
  static async removePrudoct(data, res) {}
}
