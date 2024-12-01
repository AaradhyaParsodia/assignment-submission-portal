import { Router } from "express";
import { adminController } from "../controllers/index.js";
import authMiddleware from "../middlewares/authMiddleware.js";

export const adminRouter = Router();

adminRouter.use(authMiddleware);

adminRouter.get("/assignments", adminController.getAssignmnets);
adminRouter.post("/assignments/:id/accept", adminController.acceptAssignment);
adminRouter.post("/assignments/:id/reject", adminController.rejectAssignment);