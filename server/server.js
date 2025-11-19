import express from "express";
import dotenv from "dotenv";
dotenv.config();

import prudoctsRoutes from "./src/routes/prudoctsRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import bodyParser from "body-parser";
import cartRoutes from "./src/routes/cardRoutes.js";
const app = express();

// Add these middleware BEFORE your routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import cors from "cors";
import connectDB from "./src/config/db.js";
import WishListRoutes from "./src/routes/wishListRoutes.js";
connectDB();
// Integrate routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/prudocts", prudoctsRoutes);
app.use("/api/v1/carts", cartRoutes);
app.use("/api/v1/wishList", WishListRoutes);
app.get("/", (req, res) => {
  res.send("welcome from backend");
});
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
