// routes/userRoutes.js
import express from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/get", getAllUsers); // GET all
router.post("/create", createUser); // POST create
router.put("/:id", updateUser); // PUT update by id
router.delete("/:id", deleteUser); // DELETE by id

export default router;
