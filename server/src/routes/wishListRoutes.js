import express from "express";
import {
  addPrudoctToWishList,
  createWishList,
  removePrudoctFromWishList,
  removeWishList,
} from "../controllers/wishList.controllers.js";
const router = express.Router();
router.get("/createList", createWishList);
router.post("/addPrudoctToList", addPrudoctToWishList);
router.delete("/removePrudoctFromList", removePrudoctFromWishList);
router.delete("/removeList", removeWishList);
export default router;
