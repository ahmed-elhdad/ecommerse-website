import { CartService } from "../services/cartService.js";
export const getCart = (req, res) => {
  CartService.getCart(req.body, res);
};
export const createCart = (req, res) => {
  CartService.createCart(req.body, res);
};
export const removeCart = (req, res) => {
  CartService.removeCart(req.body, res);
};
export const addPrudoct = (req, res) => {
  CartService.addPrudoct(req.body, res);
};
export const editPrudoct = (req, res) => {
  CartService.editPrudoct(req.body, res);
};
export const removePrudoct = (req, res) => {
  CartService.removePrudoct(req.body, res);
};
