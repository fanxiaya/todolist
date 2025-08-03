import { Router } from "express";
import userRouter from "./userRouter.mjs";
import { globalErrorHandler } from "../middleware/userMiddleware.mjs";
const router = Router();
router.use(userRouter)
router.use(globalErrorHandler);
export default router;