import { Router } from "express";
import { authRouter } from "./auth.js";
import { userRouter } from "./user.js";
import { adminRouter } from "./admin.js";

export const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/user", userRouter);
rootRouter.use("/admin", adminRouter);