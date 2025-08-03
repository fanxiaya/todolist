import { Router } from "express";
import userRouter from "./userRouter.mjs";
const router = Router();
router.use(userRouter)
export default router;