// routes/userRoutes.js
import express from "express";
import { getAllUsers, createUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/getusers", getAllUsers);
router.post("/createuser", createUser);

export default router;
