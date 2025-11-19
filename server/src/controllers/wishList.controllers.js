import { WishListService } from "../services/wishListService.js";

export const createWishList = () => {
  WishListService.createWishList(req.body, res);
};
export const addPrudoctToWishList = () => {};
export const removePrudoctFromWishList = () => {};
export const removeWishList = () => {};
