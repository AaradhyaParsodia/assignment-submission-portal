import { Router } from "express";
import { userController } from "../controllers/index.js";

import authMiddleware from "../middlewares/authMiddleware.js"; 

export const userRouter = Router();

userRouter.use(authMiddleware);

userRouter.get("/admin", userController.getAllAdmins);
userRouter.post("/upload", userController.uploadAssignment);