// app.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(`My method is ${req.method} and my url is ${req.originalUrl}`);
  next(); // Important: moves to the next middleware or route
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
