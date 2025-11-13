import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import prudoctsRoutes from "./src/routes/prudoctsRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
app.use('/api/v1/prudocts',prudoctsRoutes);
app.use('/api/v1/auth',authRoutes);
// import connectDB from "./src/config/db.js";
// connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
